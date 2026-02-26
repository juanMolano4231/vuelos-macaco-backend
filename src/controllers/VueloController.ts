import { Request, Response } from 'express';
import { VueloService } from '../services/VueloService';

const vueloService = new VueloService();


// Debe retornar una lista de todos los vuelos
// Use el método getTickets de TiqueteController como referencia
export const getVuelos = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Debe retornar un cierto vuelo en base a la ID de ese vuelo
// Use el método getTicketById de TiqueteController como referencia
export const getVueloById = async (req: Request, res: Response) => {
    try {

    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
