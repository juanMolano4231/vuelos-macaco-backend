import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

const authService = new AuthService();

export const login = async (req: Request, res: Response) => {
    try {
        const { correo, contrasena } = req.body;
        const token = await authService.login(correo, contrasena);
        res.json({ token });
    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
};
