import { Request, Response } from 'express';
import { VueloService } from '../services/VueloService';

const vueloService = new VueloService();

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

        if(!vuelo) {
            return res.status(404).json({ message: 'Vuelo no encontrado'})
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
