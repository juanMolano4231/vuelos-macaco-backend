import Usuario from '../models/Usuario';

export class UsuarioRepository {
    async findByUsername(nombre: string) {
        return await Usuario.findOne({ where: { nombre } });
    }

    async findById(id: number) {
        return await Usuario.findByPk(id, {
            attributes: { exclude: ['contrasena'] }
        });
    }

    async create(data: {
        nombre: string;
        correo: string;
        contrasena: string;
        edad: number;
    }) {
        await Usuario.create(data);

        return await Usuario.findOne({
            where: { correo: data.correo },
            attributes: { exclude: ['contrasena'] }
        });
    }

    async findByEmail(correo: string) {
        return await Usuario.findOne({ where: { correo } });
    }
}
