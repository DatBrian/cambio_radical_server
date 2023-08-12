import QueriesCommon from "../common/QueriesCommon";
import { IBarrio } from "../interfaces/BarrioInterface";
import { Model } from "mongoose";
import { BarrioModel } from "../model/BarrioModel";

class BarrioRepository extends QueriesCommon<IBarrio> {
  constructor(protected model: Model<IBarrio> = BarrioModel) {
    super(model);
  }

  public async getAllBarrios(): Promise<any[]> {
    try {
      return await this.getAll();
    } catch (error) {
      console.error("Error al obtener los Barrios:", error);
      throw new Error("Error al obtener los Barrios");
    }
  }

  public async getBarrioById(id: any): Promise<IBarrio | null> {
    try {
      return await this.getOneById(id);
    } catch (error) {
      console.error("Error al obtener el Barrio:", error);
      throw new Error("Error al obtener el Barrio");
    }
  }

  public async insertBarrio(Barrio: any): Promise<string> {
    try {
      await this.insert(Barrio);
      return "Barrio insertado correctamente :D";
    } catch (error) {
      console.error("Error al insertar el Barrio:", error);
      throw new Error("Error al insertar el Barrio");
    }
  }

  public async updateBarrio(id: any, Barrio: any): Promise<string> {
    try {
      await this.put(id, Barrio);
      return "Barrio actualizado correctamente :D";
    } catch (error) {
      console.error("Error al actualizar el Barrio:", error);
      throw new Error("Error al actualizar el Barrio");
    }
  }

  public async deleteBarrio(id: any): Promise<string> {
    try {
      await this.delete(id);
      return "Barrio eliminado correctamente :D";
    } catch (error) {
      console.error("Error al eliminar el Barrio:", error);
      throw new Error("Error al eliminar el Barrio");
    }
  }

  public async verifyDoc(doc: any): Promise<boolean> {
    try {
      const exist = await this.model.findOne({ doc: doc });
      return exist ? true : false;
    } catch (error) {
      console.error("Error al verificar el Barrio:", error);
      throw new Error("Error al verificar el Barrio");
    }
  }
}

export default BarrioRepository;
export const barrioRepository = new BarrioRepository();