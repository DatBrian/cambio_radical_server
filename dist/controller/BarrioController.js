"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.barrioController = exports.BarrioController = void 0;
const BarrioServices_1 = require("../services/BarrioServices");
class BarrioController {
    service;
    constructor() {
        this.service = BarrioServices_1.barrioServices;
    }
    getAllBarrio = async (_req, res) => {
        try {
            const Barrios = await this.service.getAllBarrios();
            res.json(Barrios);
        }
        catch (error) {
            console.error("Error al obtener los Barrios:", error);
            res.status(500).json({
                error: "Ocurrió un error al obtener los Barrios, revise la consola para más información",
            });
        }
    };
    getBarrioById = async (req, res) => {
        try {
            const body = await req.body;
            const Barrio = await this.service.getBarrioByID(body);
            res.json(Barrio);
        }
        catch (error) {
            console.error("Error al obtener el Barrio:", error);
            res.status(500).json({
                error: "Ocurrió un error al obtener el Barrio, revise la consola para más información",
            });
        }
    };
    insertBarrio = async (req, res) => {
        try {
            const body = await req.body;
            const newBarrio = await this.service.insertBarrio(body);
            res.json(newBarrio);
        }
        catch (error) {
            console.error("Error al insertar el Barrio:", error);
            res.status(500).json({
                error: "Ocurrió un error al insertar el Barrio, revise la consola para más información",
            });
        }
    };
    updateBarrio = async (req, res) => {
        try {
            const body = await req.body;
            const updated = await this.service.updateBarrio(body);
            res.json(updated);
        }
        catch (error) {
            console.error("Error al actualizar el Barrio:", error);
            res.status(500).json({
                error: "Ocurrió un error al actualizar el Barrio, revise la consola para más información",
            });
        }
    };
    deleteBarrio = async (req, res) => {
        try {
            const body = await req.body;
            const deleted = await this.service.deleteBarrio(body);
            res.json(deleted);
        }
        catch (error) {
            console.error("Error al eliminar el Barrio:", error);
            res.status(500).json({
                error: "Ocurrió un error al eliminar el Barrio, revise la consola para más información",
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
exports.BarrioController = BarrioController;
exports.default = BarrioController;
exports.barrioController = new BarrioController();
