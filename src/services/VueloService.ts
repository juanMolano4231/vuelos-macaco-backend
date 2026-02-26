import { VueloRepository } from "../repositories/VueloRepository";


export class VueloService {
    private vueloRepository: VueloRepository;

    constructor() {
        this.vueloRepository = new VueloRepository();
    }


}
