import { Request, Response } from 'express';
import { UsuarioService } from '../services/UsuarioService';
import Usuario from '../models/Usuario';

const usuarioService = new UsuarioService();

export const getMe = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id;

        const user = await usuarioService.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};


export const register = async (req: Request, res: Response) => {
    try {
        const { nombre, correo, contrasena, edad } = req.body;

        const user = await usuarioService.create({
            nombre,
            correo,
            contrasena,
            edad
        });

        res.status(201).json(user);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};