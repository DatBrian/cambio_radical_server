import PuestoRepository, {
  puestoRepository,
} from "../repositories/PuestoRepository";

class PuestoServices {
  private repository: PuestoRepository;

  constructor() {
    this.repository = puestoRepository;
  }

  public async getAllPuestos(): Promise<any> {
    return this.repository.getAllPuestos();
  }

  public async getPuestoByID(body: any): Promise<any> {
    const id = body.id;
    return this.repository.getPuestoById(id);
  }

  public async insertPuesto(body: any): Promise<string> {
    return this.repository.insertPuesto(body);
  }

  public async updatePuesto(body: any): Promise<any> {
    const id = body.id;
    delete body.id;
    return this.repository.updatePuesto(id, body);
  }

  public async deletePuesto(body: any): Promise<string> {
    const id = body.id;
    return this.repository.deletePuesto(id);
  }

  public async verifyDoc(body: any): Promise<boolean> {
    const doc = body.doc;
    return this.repository.verifyDoc(doc);
  }
}

export default PuestoServices;
export const puestoServices = new PuestoServices();
