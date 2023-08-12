import QueriesCommon from "../common/QueriesCommon";
import { IVotante } from "../interfaces/VotanteInterface";
import { Model } from 'mongoose';
import { votanteModel } from '../model/VotanteModel';

class VotanteRepository extends QueriesCommon<IVotante> {

    constructor(protected model: Model<IVotante> = votanteModel) {
        super(model);
    }

    public async getAllVotantes(): Promise<any[]> {
        try {
            return await this.getAll();
        } catch (error) {
            console.error("Error al obtener los votantes:", error);
            throw new Error("Error al obtener los votantes");
        }
    }

    public async getVotanteById(id: any): Promise<IVotante | null> {
        try {
            return await this.getOneById(id);
        } catch (error) {
            console.error("Error al obtener el votante:", error);
            throw new Error("Error al obtener el votante");
        }
    }

    public async insertVotante(votante: any): Promise<string> {
        try {
            await this.insert(votante);
            return 'Votante insertado correctamente :D';
        } catch (error) {
            console.error("Error al insertar el votante:", error);
            throw new Error("Error al insertar el votante");
        }
    }

    public async updateVotante(id: any, votante: any): Promise<string> {
        try {
            await this.put(id, votante);
            return 'Votante actualizado correctamente :D';
        } catch (error) {
            console.error("Error al actualizar el votante:", error);
            throw new Error("Error al actualizar el votante");
        }
    }

    public async deleteVotante(id: any): Promise<string> {
        try {
            await this.delete(id);
            return 'Votante eliminado correctamente :D';
        } catch (error) {
            console.error("Error al eliminar el votante:", error);
            throw new Error("Error al eliminar el votante");
        }
    }

    public async verifyDoc(doc: any): Promise<boolean>{
        try {
            const exist = await this.model.findOne({ doc: doc });
            return (exist) ? true : false
        } catch (error) {
            console.error("Error al verificar el votante:", error);
            throw new Error("Error al verificar el votante");

        }
    }
}

export default VotanteRepository;
export const votanteRepository = new VotanteRepository();
