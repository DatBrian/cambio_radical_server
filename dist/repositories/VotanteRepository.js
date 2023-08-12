"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.votanteRepository = void 0;
const QueriesCommon_1 = __importDefault(require("../common/QueriesCommon"));
const VotanteModel_1 = require("../model/VotanteModel");
class VotanteRepository extends QueriesCommon_1.default {
    model;
    constructor(model = VotanteModel_1.votanteModel) {
        super(model);
        this.model = model;
    }
    async getAllVotantes() {
        try {
            return await this.getAll();
        }
        catch (error) {
            console.error("Error al obtener los votantes:", error);
            throw new Error("Error al obtener los votantes");
        }
    }
    async getVotanteById(id) {
        try {
            return await this.getOneById(id);
        }
        catch (error) {
            console.error("Error al obtener el votante:", error);
            throw new Error("Error al obtener el votante");
        }
    }
    async insertVotante(votante) {
        try {
            await this.insert(votante);
            return 'Votante insertado correctamente :D';
        }
        catch (error) {
            console.error("Error al insertar el votante:", error);
            throw new Error("Error al insertar el votante");
        }
    }
    async updateVotante(id, votante) {
        try {
            await this.put(id, votante);
            return 'Votante actualizado correctamente :D';
        }
        catch (error) {
            console.error("Error al actualizar el votante:", error);
            throw new Error("Error al actualizar el votante");
        }
    }
    async deleteVotante(id) {
        try {
            await this.delete(id);
            return 'Votante eliminado correctamente :D';
        }
        catch (error) {
            console.error("Error al eliminar el votante:", error);
            throw new Error("Error al eliminar el votante");
        }
    }
    async verifyDoc(doc) {
        try {
            const exist = await this.model.findOne({ doc: doc });
            return (exist) ? true : false;
        }
        catch (error) {
            console.error("Error al verificar el votante:", error);
            throw new Error("Error al verificar el votante");
        }
    }
}
exports.default = VotanteRepository;
exports.votanteRepository = new VotanteRepository();
