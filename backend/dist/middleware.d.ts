import { Request, Response, NextFunction } from 'express';
export interface AuthRequest extends Request {
    adminId?: number;
}
export declare function authMiddleware(req: AuthRequest, res: Response, next: NextFunction): void;
export declare function generateToken(id: number, email: string): string;
