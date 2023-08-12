"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.barrioRepository = void 0;
const QueriesCommon_1 = __importDefault(require("../common/QueriesCommon"));
const BarrioModel_1 = require("../model/BarrioModel");
class BarrioRepository extends QueriesCommon_1.default {
    model;
    constructor(model = BarrioModel_1.BarrioModel) {
        super(model);
        this.model = model;
    }
    async getAllBarrios() {
        try {
            return await this.getAll();
        }
        catch (error) {
            console.error("Error al obtener los Barrios:", error);
            throw new Error("Error al obtener los Barrios");
        }
    }
    async getBarrioById(id) {
        try {
            return await this.getOneById(id);
        }
        catch (error) {
            console.error("Error al obtener el Barrio:", error);
            throw new Error("Error al obtener el Barrio");
        }
    }
    async insertBarrio(Barrio) {
        try {
            await this.insert(Barrio);
            return "Barrio insertado correctamente :D";
        }
        catch (error) {
            console.error("Error al insertar el Barrio:", error);
            throw new Error("Error al insertar el Barrio");
        }
    }
    async updateBarrio(id, Barrio) {
        try {
            await this.put(id, Barrio);
            return "Barrio actualizado correctamente :D";
        }
        catch (error) {
            console.error("Error al actualizar el Barrio:", error);
            throw new Error("Error al actualizar el Barrio");
        }
    }
    async deleteBarrio(id) {
        try {
            await this.delete(id);
            return "Barrio eliminado correctamente :D";
        }
        catch (error) {
            console.error("Error al eliminar el Barrio:", error);
            throw new Error("Error al eliminar el Barrio");
        }
    }
    async verifyDoc(doc) {
        try {
            const exist = await this.model.findOne({ doc: doc });
            return exist ? true : false;
        }
        catch (error) {
            console.error("Error al verificar el Barrio:", error);
            throw new Error("Error al verificar el Barrio");
        }
    }
}
exports.default = BarrioRepository;
exports.barrioRepository = new BarrioRepository();
