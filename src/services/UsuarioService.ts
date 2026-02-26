import Usuario from '../models/Usuario';
import { UsuarioRepository } from '../repositories/UsuarioRepository';
import bcrypt from 'bcrypt';

export class UsuarioService {
    private usuarioRepository: UsuarioRepository;

    constructor() {
        this.usuarioRepository = new UsuarioRepository();
    }

    async findById(id: number) {
        return await this.usuarioRepository.findById(id);
    }

    async create(data: {
        nombre: string;
        correo: string;
        contrasena: string;
        edad: number;
    }) {

        const existingCorreo = await this.usuarioRepository.findByEmail(data.correo);
        if (existingCorreo) {
            throw new Error('El correo ya está en uso');
        }

        const existingNombre = await this.usuarioRepository.findByUsername(data.nombre);
        if (existingNombre) {
            throw new Error('El nombre ya está en uso');
        }

        const hashedPassword = await bcrypt.hash(data.contrasena, 10);

        return await this.usuarioRepository.create({
            ...data,
            contrasena: hashedPassword
        });
    }

}
