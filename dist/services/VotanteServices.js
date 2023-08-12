"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.votanteServices = void 0;
const VotanteRepository_1 = require("../repositories/VotanteRepository");
class VotanteServices {
    repository;
    constructor() {
        this.repository = VotanteRepository_1.votanteRepository;
    }
    async getAllVotantes() {
        return this.repository.getAllVotantes();
    }
    async getVotanteByID(body) {
        const id = body.id;
        return this.repository.getVotanteById(id);
    }
    async insertVotante(body) {
        return this.repository.insertVotante(body);
    }
    async updateVotante(body) {
        const id = body.id;
        delete body.id;
        return this.repository.updateVotante(id, body);
    }
    async deleteVotante(body) {
        const id = body.id;
        return this.repository.deleteVotante(id);
    }
    async verifyDoc(body) {
        const doc = body.doc;
        return this.repository.verifyDoc(doc);
    }
}
exports.default = VotanteServices;
exports.votanteServices = new VotanteServices();
