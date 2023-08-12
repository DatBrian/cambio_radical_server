"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.puestoRepository = void 0;
const QueriesCommon_1 = __importDefault(require("../common/QueriesCommon"));
const PuestoModel_1 = require("../model/PuestoModel");
class PuestoRepository extends QueriesCommon_1.default {
    model;
    constructor(model = PuestoModel_1.PuestoModel) {
        super(model);
        this.model = model;
    }
    async getAllPuestos() {
        try {
            return await this.getAll();
        }
        catch (error) {
            console.error("Error al obtener los Puestos:", error);
            throw new Error("Error al obtener los Puestos");
        }
    }
    async getPuestoById(id) {
        try {
            return await this.getOneById(id);
        }
        catch (error) {
            console.error("Error al obtener el Puesto:", error);
            throw new Error("Error al obtener el Puesto");
        }
    }
    async insertPuesto(Puesto) {
        try {
            await this.insert(Puesto);
            return "Puesto insertado correctamente :D";
        }
        catch (error) {
            console.error("Error al insertar el Puesto:", error);
            throw new Error("Error al insertar el Puesto");
        }
    }
    async updatePuesto(id, Puesto) {
        try {
            await this.put(id, Puesto);
            return "Puesto actualizado correctamente :D";
        }
        catch (error) {
            console.error("Error al actualizar el Puesto:", error);
            throw new Error("Error al actualizar el Puesto");
        }
    }
    async deletePuesto(id) {
        try {
            await this.delete(id);
            return "Puesto eliminado correctamente :D";
        }
        catch (error) {
            console.error("Error al eliminar el Puesto:", error);
            throw new Error("Error al eliminar el Puesto");
        }
    }
    async verifyDoc(doc) {
        try {
            const exist = await this.model.findOne({ doc: doc });
            return exist ? true : false;
        }
        catch (error) {
            console.error("Error al verificar el Puesto:", error);
            throw new Error("Error al verificar el Puesto");
        }
    }
}
exports.default = PuestoRepository;
exports.puestoRepository = new PuestoRepository();
