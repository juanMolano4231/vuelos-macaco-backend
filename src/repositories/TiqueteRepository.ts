import Tiquete from '../models/Tiquete';

export class TiqueteRepository {

    async findByUserId(userId: number) {
        return await Tiquete.findAll({
            where: { idUsuario: userId }
        });
    }

    async findAll() {
        return await Tiquete.findAll();
    }

    async findById(id: number) {
        return await Tiquete.findByPk(id);
    }

}