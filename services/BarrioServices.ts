import BarrioRepository, {
  barrioRepository,
} from "../repositories/BarrioRepository";

class BarrioServices {
  private repository: BarrioRepository;

  constructor() {
    this.repository = barrioRepository;
  }

  public async getAllBarrios(): Promise<any> {
    return this.repository.getAllBarrios();
  }

  public async getBarrioByID(body: any): Promise<any> {
    const id = body.id;
    return this.repository.getBarrioById(id);
  }

  public async insertBarrio(body: any): Promise<string> {
    return this.repository.insertBarrio(body);
  }

  public async updateBarrio(body: any): Promise<any> {
    const id = body.id;
    delete body.id;
    return this.repository.updateBarrio(id, body);
  }

  public async deleteBarrio(body: any): Promise<string> {
    const id = body.id;
    return this.repository.deleteBarrio(id);
  }

  public async verifyDoc(body: any): Promise<boolean> {
    const doc = body.doc;
    return this.repository.verifyDoc(doc);
  }
}

export default BarrioServices;
export const barrioServices = new BarrioServices();
