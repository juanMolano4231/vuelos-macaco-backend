import { TiqueteRepository } from '../repositories/TiqueteRepository';

export class TiqueteService {
    private tiqueteRepository: TiqueteRepository;

    constructor() {
        this.tiqueteRepository = new TiqueteRepository();
    }

    async findByUserId(id: number) {
        return await this.tiqueteRepository.findByUserId(id);
    }

    async findAll() {
        return await this.tiqueteRepository.findAll();
    }

    async findById(id: number) {
        return await this.tiqueteRepository.findById(id);
    }

    async create(data: { idVuelo: number; idUsuario: number; valor: number }) {
        return this.tiqueteRepository.create(data);
    }

}
