import { Router } from "express";
import AuthController, { authController } from "../controller/AuthController";
import { rolesMiddleware } from "../middleware/RolesMiddleware";
import { authJWTMiddleware } from "../middleware/AuthJWTMiddleware";

class AuthRoutes {
  public path: string;
  public router: Router;
  protected controller: AuthController;

  constructor() {
    this.path = "/auth";
    this.router = Router();
    this.controller = authController;
    this.initRoutes();
  }

  private initRoutes() {
    this.router.post(`${this.path}/signup`,authJWTMiddleware.validateToken, rolesMiddleware.isAdmin, authController.signUp);
    this.router.post(`${this.path}/signin`, authController.signIn);
  }
}

export const authRoutes = new AuthRoutes();
