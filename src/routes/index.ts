import { Router } from 'express';
import { login } from '../controllers/AuthController';
import { authMiddleware } from '../middleware/auth';
import { getMe, register } from '../controllers/UsuarioController';
import { getMyTickets, getTicketById, getTickets } from '../controllers/TiqueteController';
import { getVueloById, getVuelos } from '../controllers/VueloController';

const router = Router();

router.post('/login', login);
router.post('/register', register);

router.get('/me', authMiddleware, getMe);
router.get('/me/tickets', authMiddleware, getMyTickets);

router.get('/tickets', authMiddleware, getTickets);
router.get('/tickets/:id', authMiddleware, getTicketById);

router.get('/vuelos', authMiddleware, getVuelos);
router.get('/vuelos/:id', authMiddleware, getVueloById);

export default router;
