import { Router } from 'express';
import { login } from '../controllers/AuthController';
import { authMiddleware } from '../middleware/auth';
import { getMe, register } from '../controllers/UsuarioController';
import { getMyTickets, getTicketById, getTickets } from '../controllers/TiqueteController';
import { comprarTicketParaVuelo, getVueloById, getVuelos } from '../controllers/VueloController';

const router = Router();

router.post('/auth/login', login);
router.post('/auth/register', register);

router.get('/me', authMiddleware, getMe);
router.get('/me/tickets', authMiddleware, getMyTickets);

router.get('/tickets', authMiddleware, getTickets);
router.get('/tickets/:id', authMiddleware, getTicketById);

router.get('/vuelos', authMiddleware, getVuelos);
router.get('/vuelos/:id', authMiddleware, getVueloById);

router.post('/vuelos/:id', authMiddleware, comprarTicketParaVuelo);

export default router;
