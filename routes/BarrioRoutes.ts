import { Router } from "express";
import RouterCommon from "../common/RouterCommon";
import BarrioController, {
  barrioController,
} from "../controller/BarrioController";

class BarrioRoutes extends RouterCommon<BarrioController> {
  public path: string;
  public router: Router;
  public controller: BarrioController;

  constructor() {
    super(BarrioController);
    this.path = "/barrio";
    this.router = Router();
    this.controller = barrioController;
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(`${this.path}/all`, this.controller.getAllBarrio);
    this.router.get(`${this.path}/id`, (req, res) => {
      this.controller.getBarrioById(req, res);
    });
    this.router.post(`${this.path}/create`, (req, res) => {
      this.controller.insertBarrio(req, res);
    });
    this.router.put(`${this.path}/update`, (req, res) => {
      this.controller.updateBarrio(req, res);
    });
    this.router.delete(`${this.path}/delete`, (req, res) => {
      this.controller.deleteBarrio(req, res);
    });
  }
}

export const barrioRoutes = new BarrioRoutes();