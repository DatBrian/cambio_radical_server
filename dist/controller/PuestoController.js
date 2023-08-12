"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puestoController = exports.PuestoController = void 0;
const PuestoServices_1 = require("../services/PuestoServices");
class PuestoController {
    service;
    constructor() {
        this.service = PuestoServices_1.puestoServices;
    }
    getAllPuesto = async (_req, res) => {
        try {
            const Puestos = await this.service.getAllPuestos();
            res.json(Puestos);
        }
        catch (error) {
            console.error("Error al obtener los Puestos:", error);
            res.status(500).json({
                error: "Ocurrió un error al obtener los Puestos, revise la consola para más información",
            });
        }
    };
    getPuestoById = async (req, res) => {
        try {
            const body = await req.body;
            const Puesto = await this.service.getPuestoByID(body);
            res.json(Puesto);
        }
        catch (error) {
            console.error("Error al obtener el Puesto:", error);
            res.status(500).json({
                error: "Ocurrió un error al obtener el Puesto, revise la consola para más información",
            });
        }
    };
    insertPuesto = async (req, res) => {
        try {
            const body = await req.body;
            const newPuesto = await this.service.insertPuesto(body);
            res.json(newPuesto);
        }
        catch (error) {
            console.error("Error al insertar el Puesto:", error);
            res.status(500).json({
                error: "Ocurrió un error al insertar el Puesto, revise la consola para más información",
            });
        }
    };
    updatePuesto = async (req, res) => {
        try {
            const body = await req.body;
            const updated = await this.service.updatePuesto(body);
            res.json(updated);
        }
        catch (error) {
            console.error("Error al actualizar el Puesto:", error);
            res.status(500).json({
                error: "Ocurrió un error al actualizar el Puesto, revise la consola para más información",
            });
        }
    };
    deletePuesto = async (req, res) => {
        try {
            const body = await req.body;
            const deleted = await this.service.deletePuesto(body);
            res.json(deleted);
        }
        catch (error) {
            console.error("Error al eliminar el Puesto:", error);
            res.status(500).json({
                error: "Ocurrió un error al eliminar el Puesto, revise la consola para más información",
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
exports.PuestoController = PuestoController;
exports.default = PuestoController;
exports.puestoController = new PuestoController();
