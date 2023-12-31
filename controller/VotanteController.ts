import VotanteServices, { votanteServices } from "../services/VotanteServices";
import { Request, Response } from "express";

export class VotanteController {
    private readonly service: VotanteServices;
    constructor() {
        this.service = votanteServices;
    }

    public getAll = async (_req: Request, res: Response) => {
        try {
            const votantes = await this.service.getAll();
            res.json(votantes);
        } catch (error) {
            console.error("Error al obtener los votantes:", error);
            throw new Error("Error al obtener los votantes");
        }
    };

    public getAllVotante = async (req: Request, res: Response) => {
        try {
            const query = req.query;
            const Votantes = await this.service.getAllVotantes(query);
            res.json(Votantes);
        } catch (error) {
            console.error("Error al obtener los votantes:", error);
            res.status(500).json({
                error: "Ocurrió un error al obtener los votantes, revise la consola para más información",
            });
        }
    };

    public getVotanteById = async (req: Request, res: Response) => {
        try {
            const body = await req.body;
            const Votante = await this.service.getVotanteByID(body);
            res.json(Votante);
        } catch (error) {
            console.error("Error al obtener el votante:", error);
            res.status(500).json({
                error: "Ocurrió un error al obtener el votante, revise la consola para más información",
            });
        }
    };

    public insertVotante = async (req: Request, res: Response) => {
        try {
            const body = await req.body;
            const newVotante = await this.service.insertVotante(body);
            res.json(newVotante);
        } catch (error) {
            console.error("Error al insertar el votante:", error);
            res.status(500).json({
                error: "Ocurrió un error al insertar el votante, revise la consola para más información",
            });
        }
    };

    public getFilteredVotantes = async (req: Request, res: Response) => {
        try {
            const body = await req.body;
            const votantes = await this.service.getFilteredVotantes(body);
            res.json(votantes);
        } catch (error: any) {
            res.status(500).json({
                error: "Ocurrió un error al insertar el votante",
                message: error.message,
            });
        }
    };

    public updateVotante = async (req: Request, res: Response) => {
        try {
            const body = await req.body;
            const updated = await this.service.updateVotante(body);
            res.json(updated);
        } catch (error) {
            console.error("Error al actualizar el votante:", error);
            res.status(500).json({
                error: "Ocurrió un error al actualizar el votante, revise la consola para más información",
            });
        }
    };

    public deleteVotante = async (req: Request, res: Response) => {
        try {
            const body = await req.body;
            const deleted = await this.service.deleteVotante(body);
            res.json(deleted);
        } catch (error) {
            console.error("Error al eliminar el votante:", error);
            res.status(500).json({
                error: "Ocurrió un error al eliminar el votante, revise la consola para más información",
            });
        }
    };

    public getCount = async (req: Request, res: Response) => {
        try {
            let body;

            if (req.params) {
                body = {
                    type: req.params.type,
                    value: req.params.value,
                };
            }

            const count = body
                ? await this.service.getCount(body)
                : await this.service.getCount();
            res.json(count);
        } catch (error: any) {
            res.status(500).json({
                error: "Ocurrió un error al obtener la cuenta",
                message: error.message,
            });
        }
    };

    public verifyDoc = async (req: Request, res: Response) => {
        try {
            const body = await req.body;
            const verified = await this.service.verifyDoc(body);
            res.json(verified);
        } catch (error) {
            console.error("Error al verificar el documento:", error);
            res.status(500).json({
                error: "Ocurrió un error al verificar el documento, revise la consola para más información",
            });
        }
    };

    public getLideres = async (_req: Request, res: Response) => {
        try {
            const lideres = await this.service.getLideres();
            res.json(lideres);
        } catch (error) {
            console.error("Error al obtener los líderes:", error);
            res.status(500).json({
                error: "Ocurrió un error al obtener los líderes, revise la consola para más información",
            });
        }
    };
}
export default VotanteController;
export const votanteController = new VotanteController();
