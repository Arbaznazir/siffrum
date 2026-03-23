import { Router } from 'express';
import db from '../database.js';
import { authMiddleware } from '../middleware.js';
const router = Router();
function formatMessage(row) {
    return { ...row, read: !!row.read };
}
// Public: Submit contact form
router.post('/', (req, res) => {
    const { name, email, message, company, phone, service, budget } = req.body;
    if (!name || !email || !message) {
        res.status(400).json({ error: 'Name, email, and message are required' });
        return;
    }
    db.prepare(`INSERT INTO messages (name, email, company, phone, service, budget, message)
     VALUES (?, ?, ?, ?, ?, ?, ?)`).run(name, email, company || '', phone || '', service || '', budget || '', message);
    res.status(201).json({ message: 'Message sent successfully' });
});
// Admin: List messages
router.get('/', authMiddleware, (_req, res) => {
    const rows = db.prepare('SELECT * FROM messages ORDER BY created_at DESC').all();
    res.json(rows.map(formatMessage));
});
// Admin: Mark as read
router.patch('/:id/read', authMiddleware, (req, res) => {
    db.prepare('UPDATE messages SET read = 1 WHERE id = ?').run(req.params.id);
    res.json({ message: 'Marked as read' });
});
// Admin: Delete message
router.delete('/:id', authMiddleware, (req, res) => {
    const result = db.prepare('DELETE FROM messages WHERE id = ?').run(req.params.id);
    if (result.changes === 0) {
        res.status(404).json({ error: 'Message not found' });
        return;
    }
    res.json({ message: 'Message deleted' });
});
export default router;
