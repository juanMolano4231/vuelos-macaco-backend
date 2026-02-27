import Vuelo from "../models/Vuelo";

export class VueloRepository {

    async findAll() {
        return await Vuelo.findAll();
    }

    async findById(id: number) {
        return await Vuelo.findByPk(id);
    }

}