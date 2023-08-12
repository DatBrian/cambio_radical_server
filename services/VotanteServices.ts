import VotanteRepository, { votanteRepository } from "../repositories/VotanteRepository";

class VotanteServices {
    private repository: VotanteRepository;

    constructor() {
        this.repository = votanteRepository;
    }

    public async getAllVotantes(): Promise<any> {
        return this.repository.getAllVotantes();
    }

    public async getVotanteByID(body: any): Promise<any> {
        const id = body.id;
        return this.repository.getVotanteById(id);
    }

    public async insertVotante(body: any): Promise<string> {
        return this.repository.insertVotante(body);
    }

    public async updateVotante(body: any): Promise<any> {
        const id = body.id;
        delete body.id;
        return this.repository.updateVotante(id, body);
    }

    public async deleteVotante(body: any): Promise<string> {
        const id = body.id;
        return this.repository.deleteVotante(id);
    }

    public async verifyDoc(body: any): Promise<boolean>{
        const doc = body.doc;
        return this.repository.verifyDoc(doc);
    }
}

export default VotanteServices;
export const votanteServices = new VotanteServices();