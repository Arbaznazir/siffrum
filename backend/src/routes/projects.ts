import { Router, Request, Response } from 'express';
import db from '../database.js';
import { authMiddleware, type AuthRequest } from '../middleware.js';
import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', '..', 'uploads'),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${uuidv4()}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (_req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp|svg/;
    const ext = allowed.test(path.extname(file.originalname).toLowerCase());
    const mime = allowed.test(file.mimetype);
    cb(null, ext && mime);
  },
});

const router = Router();

interface ProjectRow {
  id: number;
  title: string;
  description: string;
  long_description: string;
  image_url: string;
  tags: string;
  category: string;
  client: string;
  live_url: string;
  featured: number;
  created_at: string;
}

function formatProject(row: ProjectRow) {
  return {
    ...row,
    tags: JSON.parse(row.tags || '[]'),
    featured: !!row.featured,
  };
}

// Public: List projects
router.get('/', (req: Request, res: Response): void => {
  const { featured } = req.query;
  let rows: ProjectRow[];

  if (featured === 'true') {
    rows = db.prepare('SELECT * FROM projects WHERE featured = 1 ORDER BY created_at DESC').all() as ProjectRow[];
  } else {
    rows = db.prepare('SELECT * FROM projects ORDER BY created_at DESC').all() as ProjectRow[];
  }

  res.json(rows.map(formatProject));
});

// Public: Get single project
router.get('/:id', (req: Request, res: Response): void => {
  const row = db.prepare('SELECT * FROM projects WHERE id = ?').get(req.params.id) as ProjectRow | undefined;
  if (!row) {
    res.status(404).json({ error: 'Project not found' });
    return;
  }
  res.json(formatProject(row));
});

// Admin: Create project
router.post('/', authMiddleware, upload.single('image'), (req: AuthRequest, res: Response): void => {
  const { title, description, long_description, tags, category, client, live_url, featured } = req.body;

  if (!title || !description) {
    res.status(400).json({ error: 'Title and description are required' });
    return;
  }

  const tagsArray = tags
    ? JSON.stringify(tags.split(',').map((t: string) => t.trim()).filter(Boolean))
    : '[]';

  const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

  const result = db.prepare(
    `INSERT INTO projects (title, description, long_description, image_url, tags, category, client, live_url, featured)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    title,
    description,
    long_description || '',
    imageUrl,
    tagsArray,
    category || 'Web App',
    client || '',
    live_url || '',
    featured === 'true' ? 1 : 0
  );

  const project = db.prepare('SELECT * FROM projects WHERE id = ?').get(result.lastInsertRowid) as ProjectRow;
  res.status(201).json(formatProject(project));
});

// Admin: Update project
router.put('/:id', authMiddleware, upload.single('image'), (req: AuthRequest, res: Response): void => {
  const { title, description, long_description, tags, category, client, live_url, featured } = req.body;

  const existing = db.prepare('SELECT * FROM projects WHERE id = ?').get(req.params.id) as ProjectRow | undefined;
  if (!existing) {
    res.status(404).json({ error: 'Project not found' });
    return;
  }

  const tagsArray = tags
    ? JSON.stringify(tags.split(',').map((t: string) => t.trim()).filter(Boolean))
    : existing.tags;

  const imageUrl = req.file ? `/uploads/${req.file.filename}` : existing.image_url;

  db.prepare(
    `UPDATE projects SET title=?, description=?, long_description=?, image_url=?, tags=?, category=?, client=?, live_url=?, featured=? WHERE id=?`
  ).run(
    title || existing.title,
    description || existing.description,
    long_description ?? existing.long_description,
    imageUrl,
    tagsArray,
    category || existing.category,
    client ?? existing.client,
    live_url ?? existing.live_url,
    featured === 'true' ? 1 : featured === 'false' ? 0 : existing.featured,
    req.params.id
  );

  const updated = db.prepare('SELECT * FROM projects WHERE id = ?').get(req.params.id) as ProjectRow;
  res.json(formatProject(updated));
});

// Admin: Delete project
router.delete('/:id', authMiddleware, (_req: AuthRequest, res: Response): void => {
  const result = db.prepare('DELETE FROM projects WHERE id = ?').run(_req.params.id);
  if (result.changes === 0) {
    res.status(404).json({ error: 'Project not found' });
    return;
  }
  res.json({ message: 'Project deleted' });
});

export default router;
