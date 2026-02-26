import { Request, Response } from 'express';
import { TiqueteService } from '../services/TiqueteService';

const tiqueteService = new TiqueteService();

export const getMyTickets = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id;

        const tickets = await tiqueteService.findByUserId(userId);

        res.json(tickets);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getTickets = async (req: Request, res: Response) => {
    try {
        const tickets = await tiqueteService.findAll();

        res.json(tickets);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getTicketById = async (req: Request, res: Response) => {
    try {
        const ticketId = parseInt(req.params.id, 10);
        const ticket = await tiqueteService.findById(ticketId);

        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.json(ticket);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
