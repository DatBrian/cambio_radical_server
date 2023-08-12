import QueriesCommon from "../common/QueriesCommon";
import { IPuesto } from "../interfaces/PuestoInterface";
import { Model } from "mongoose";
import { PuestoModel } from "../model/PuestoModel";

class PuestoRepository extends QueriesCommon<IPuesto> {
  constructor(protected model: Model<IPuesto> = PuestoModel) {
    super(model);
  }

  public async getAllPuestos(): Promise<any[]> {
    try {
      return await this.getAll();
    } catch (error) {
      console.error("Error al obtener los Puestos:", error);
      throw new Error("Error al obtener los Puestos");
    }
  }

  public async getPuestoById(id: any): Promise<IPuesto | null> {
    try {
      return await this.getOneById(id);
    } catch (error) {
      console.error("Error al obtener el Puesto:", error);
      throw new Error("Error al obtener el Puesto");
    }
  }

  public async insertPuesto(Puesto: any): Promise<string> {
    try {
      await this.insert(Puesto);
      return "Puesto insertado correctamente :D";
    } catch (error) {
      console.error("Error al insertar el Puesto:", error);
      throw new Error("Error al insertar el Puesto");
    }
  }

  public async updatePuesto(id: any, Puesto: any): Promise<string> {
    try {
      await this.put(id, Puesto);
      return "Puesto actualizado correctamente :D";
    } catch (error) {
      console.error("Error al actualizar el Puesto:", error);
      throw new Error("Error al actualizar el Puesto");
    }
  }

  public async deletePuesto(id: any): Promise<string> {
    try {
      await this.delete(id);
      return "Puesto eliminado correctamente :D";
    } catch (error) {
      console.error("Error al eliminar el Puesto:", error);
      throw new Error("Error al eliminar el Puesto");
    }
  }

  public async verifyDoc(doc: any): Promise<boolean> {
    try {
      const exist = await this.model.findOne({ doc: doc });
      return exist ? true : false;
    } catch (error) {
      console.error("Error al verificar el Puesto:", error);
      throw new Error("Error al verificar el Puesto");
    }
  }
}

export default PuestoRepository;
export const puestoRepository = new PuestoRepository();
