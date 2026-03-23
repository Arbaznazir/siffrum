import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'siffrum-secret-change-in-production';
export function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.adminId = decoded.id;
        next();
    }
    catch {
        res.status(401).json({ error: 'Invalid token' });
    }
}
export function generateToken(id, email) {
    return jwt.sign({ id, email }, JWT_SECRET, { expiresIn: '7d' });
}
