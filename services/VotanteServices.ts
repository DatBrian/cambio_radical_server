import VotanteRepository, {
    votanteRepository,
} from "../repositories/VotanteRepository";

class VotanteServices {
    private repository: VotanteRepository;

    constructor() {
        this.repository = votanteRepository;
    }

    public async getAll(): Promise<any> {
        return await this.repository.getAll();
    }

    public async getAllVotantes(query: any): Promise<any> {
        const page = query.page;
        return this.repository.getAllVotantes(page);
    }

    public async getVotanteByID(body: any): Promise<any> {
        const id = body.id;
        return this.repository.getVotanteById(id);
    }

    public async getFilteredVotantes(body: any): Promise<any[]> {
        const query = body.query;
        return this.repository.getFilteredVotantes(query);
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

    public async getCount(body?: any): Promise<number> {
        if (body) {
            const type = body.type;
            const value = body.value;

            return this.repository.getCount(type, value);
        } else {
            return this.repository.getCount();
        }
    }

    public async verifyDoc(body: any): Promise<boolean> {
        const doc = body.doc;
        return this.repository.verifyDoc(doc);
    }

    public async getLideres(): Promise<any> {
        return await this.repository.getLideres();
    }
}

export default VotanteServices;
export const votanteServices = new VotanteServices();
