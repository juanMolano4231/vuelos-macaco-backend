import { VueloRepository } from "../repositories/VueloRepository";


export class VueloService {
    private vueloRepository: VueloRepository;

    constructor() {
        this.vueloRepository = new VueloRepository();
    }

    async findAll() {
        return await this.vueloRepository.findAll();
    }

    async findById(id: number) {
        return await this.vueloRepository.findById(id);
    }

}
