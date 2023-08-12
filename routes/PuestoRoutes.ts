import { Router } from "express";
import RouterCommon from "../common/RouterCommon";
import PuestoController, {
  puestoController,
} from "../controller/PuestoController";

class PuestoRoutes extends RouterCommon<PuestoController> {
  public path: string;
  public router: Router;
  public controller: PuestoController;

  constructor() {
    super(PuestoController);
    this.path = "/puesto";
    this.router = Router();
    this.controller = puestoController;
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(`${this.path}/all`, this.controller.getAllPuesto);
    this.router.get(`${this.path}/id`, (req, res) => {
      this.controller.getPuestoById(req, res);
    });
    this.router.post(`${this.path}/create`, (req, res) => {
      this.controller.insertPuesto(req, res);
    });
    this.router.put(`${this.path}/update`, (req, res) => {
      this.controller.updatePuesto(req, res);
    });
    this.router.delete(`${this.path}/delete`, (req, res) => {
      this.controller.deletePuesto(req, res);
    });
  }
}

export const puestoRoutes = new PuestoRoutes();
