import { Request, Response } from 'express';
import { VueloService } from '../services/VueloService';
import { TiqueteService } from '../services/TiqueteService';

const vueloService = new VueloService();
const tiqueteService = new TiqueteService();

export const getVuelos = async (req: Request, res: Response) => {
    try {
        const vuelos = await vueloService.findAll();

        res.json(vuelos);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getVueloById = async (req: Request, res: Response) => {
    try {
        const vueloId = parseInt(req.params.id, 10);
        const vuelo = await vueloService.findById(vueloId);

        return res.json(vuelo);

        if (!vuelo) {
            return res.status(404).json({ message: 'Vuelo no encontrado' })
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const comprarTicketParaVuelo = async (req: Request, res: Response) => {
    try {
        const vueloId = parseInt(req.params.id, 10);
        if (isNaN(vueloId)) {
            return res.status(400).json({ message: 'ID de vuelo inválido' });
        }

        const vuelo = await vueloService.findById(vueloId);
        if (!vuelo) {
            return res.status(404).json({ message: 'Vuelo no encontrado' });
        }

        const usuarioId = (req as any).user.id; // from authMiddleware

        const nuevoTiquete = await tiqueteService.create({
            idVuelo: vueloId,
            idUsuario: usuarioId,
            valor: 150000
        });

        return res.status(201).json({
            message: 'Tiquete comprado exitosamente',
            tiquete: nuevoTiquete
        });

    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: 'Error al comprar tiquete' });
    }
};