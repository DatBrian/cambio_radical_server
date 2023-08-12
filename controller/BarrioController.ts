import BarrioServices, { barrioServices } from "../services/BarrioServices";
import { Request, Response } from "express";

export class BarrioController {
  private readonly service: BarrioServices;
  constructor() {
    this.service = barrioServices;
  }

  public getAllBarrio = async (_req: Request, res: Response) => {
    try {
      const Barrios = await this.service.getAllBarrios();
      res.json(Barrios);
    } catch (error) {
      console.error("Error al obtener los Barrios:", error);
      res.status(500).json({
        error:
          "Ocurrió un error al obtener los Barrios, revise la consola para más información",
      });
    }
  };

  public getBarrioById = async (req: Request, res: Response) => {
    try {
      const body = await req.body;
      const Barrio = await this.service.getBarrioByID(body);
      res.json(Barrio);
    } catch (error) {
      console.error("Error al obtener el Barrio:", error);
      res.status(500).json({
        error:
          "Ocurrió un error al obtener el Barrio, revise la consola para más información",
      });
    }
  };

  public insertBarrio = async (req: Request, res: Response) => {
    try {
      const body = await req.body;
      const newBarrio = await this.service.insertBarrio(body);
      res.json(newBarrio);
    } catch (error) {
      console.error("Error al insertar el Barrio:", error);
      res.status(500).json({
        error:
          "Ocurrió un error al insertar el Barrio, revise la consola para más información",
      });
    }
  };

  public updateBarrio = async (req: Request, res: Response) => {
    try {
      const body = await req.body;
      const updated = await this.service.updateBarrio(body);
      res.json(updated);
    } catch (error) {
      console.error("Error al actualizar el Barrio:", error);
      res.status(500).json({
        error:
          "Ocurrió un error al actualizar el Barrio, revise la consola para más información",
      });
    }
  };

  public deleteBarrio = async (req: Request, res: Response) => {
    try {
      const body = await req.body;
      const deleted = await this.service.deleteBarrio(body);
      res.json(deleted);
    } catch (error) {
      console.error("Error al eliminar el Barrio:", error);
      res.status(500).json({
        error:
          "Ocurrió un error al eliminar el Barrio, revise la consola para más información",
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
        error:
          "Ocurrió un error al verificar el documento, revise la consola para más información",
      });
    }
  };
}
export default BarrioController;
export const barrioController = new BarrioController();
