"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.votanteController = exports.VotanteController = void 0;
const VotanteServices_1 = require("../services/VotanteServices");
class VotanteController {
    service;
    constructor() {
        this.service = VotanteServices_1.votanteServices;
    }
    getAllVotante = async (_req, res) => {
        try {
            const Votantes = await this.service.getAllVotantes();
            res.json(Votantes);
        }
        catch (error) {
            console.error("Error al obtener los votantes:", error);
            res.status(500).json({
                error: "Ocurrió un error al obtener los votantes, revise la consola para más información",
            });
        }
    };
    getVotanteById = async (req, res) => {
        try {
            const body = await req.body;
            const Votante = await this.service.getVotanteByID(body);
            res.json(Votante);
        }
        catch (error) {
            console.error("Error al obtener el votante:", error);
            res.status(500).json({
                error: "Ocurrió un error al obtener el votante, revise la consola para más información",
            });
        }
    };
    insertVotante = async (req, res) => {
        try {
            const body = await req.body;
            const newVotante = await this.service.insertVotante(body);
            res.json(newVotante);
        }
        catch (error) {
            console.error("Error al insertar el votante:", error);
            res.status(500).json({
                error: "Ocurrió un error al insertar el votante, revise la consola para más información",
            });
        }
    };
    updateVotante = async (req, res) => {
        try {
            const body = await req.body;
            const updated = await this.service.updateVotante(body);
            res.json(updated);
        }
        catch (error) {
            console.error("Error al actualizar el votante:", error);
            res.status(500).json({
                error: "Ocurrió un error al actualizar el votante, revise la consola para más información",
            });
        }
    };
    deleteVotante = async (req, res) => {
        try {
            const body = await req.body;
            const deleted = await this.service.deleteVotante(body);
            res.json(deleted);
        }
        catch (error) {
            console.error("Error al eliminar el votante:", error);
            res.status(500).json({
                error: "Ocurrió un error al eliminar el votante, revise la consola para más información",
            });
        }
    };
    verifyDoc = async (req, res) => {
        try {
            const body = await req.body;
            const verified = await this.service.verifyDoc(body);
            res.json(verified);
        }
        catch (error) {
            console.error("Error al verificar el documento:", error);
            res.status(500).json({
                error: "Ocurrió un error al verificar el documento, revise la consola para más información",
            });
        }
    };
}
exports.VotanteController = VotanteController;
exports.default = VotanteController;
exports.votanteController = new VotanteController();
