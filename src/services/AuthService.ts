import { UsuarioRepository } from '../repositories/UsuarioRepository';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export class AuthService {
    private usuarioRepository: UsuarioRepository;

    constructor() {
        this.usuarioRepository = new UsuarioRepository();
    }

    async login(email: string, password: string) {
        const user = await this.usuarioRepository.findByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }

        if (!bcrypt.compare(password, user.contrasena)) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign(
            { id: user.id, username: user.nombre },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );

        return token;
    }
}
