"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.barrioServices = void 0;
const BarrioRepository_1 = require("../repositories/BarrioRepository");
class BarrioServices {
    repository;
    constructor() {
        this.repository = BarrioRepository_1.barrioRepository;
    }
    async getAllBarrios() {
        return this.repository.getAllBarrios();
    }
    async getBarrioByID(body) {
        const id = body.id;
        return this.repository.getBarrioById(id);
    }
    async insertBarrio(body) {
        return this.repository.insertBarrio(body);
    }
    async updateBarrio(body) {
        const id = body.id;
        delete body.id;
        return this.repository.updateBarrio(id, body);
    }
    async deleteBarrio(body) {
        const id = body.id;
        return this.repository.deleteBarrio(id);
    }
    async verifyDoc(body) {
        const doc = body.doc;
        return this.repository.verifyDoc(doc);
    }
}
exports.default = BarrioServices;
exports.barrioServices = new BarrioServices();
