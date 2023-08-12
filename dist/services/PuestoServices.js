"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puestoServices = void 0;
const PuestoRepository_1 = require("../repositories/PuestoRepository");
class PuestoServices {
    repository;
    constructor() {
        this.repository = PuestoRepository_1.puestoRepository;
    }
    async getAllPuestos() {
        return this.repository.getAllPuestos();
    }
    async getPuestoByID(body) {
        const id = body.id;
        return this.repository.getPuestoById(id);
    }
    async insertPuesto(body) {
        return this.repository.insertPuesto(body);
    }
    async updatePuesto(body) {
        const id = body.id;
        delete body.id;
        return this.repository.updatePuesto(id, body);
    }
    async deletePuesto(body) {
        const id = body.id;
        return this.repository.deletePuesto(id);
    }
    async verifyDoc(body) {
        const doc = body.doc;
        return this.repository.verifyDoc(doc);
    }
}
exports.default = PuestoServices;
exports.puestoServices = new PuestoServices();
