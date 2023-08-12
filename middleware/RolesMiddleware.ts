import { Request, Response, NextFunction } from "express";
import { UsuarioModel } from "../model/UsuarioModel";

class RolesMiddleware {
  public isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    if (req.user) {
      const user = req.user;
      if (user) {
        const User = await UsuarioModel.findById(user);
        const role = User?.role;
        if (role === "admin") {
          next();
        } else {
          res
            .status(400)
            .json({ error: "No tienes permisos para acceder a esta ruta" });
        }
      }
    }else{
      res
      .status(400)
      .json({ error: "Usuario no encontrado" });
    }

  };

  public isUser = async (req: Request, res: Response, next: NextFunction) => {
    if (req.user) {
      const user = req.user;
      if (user) {
        const User = await UsuarioModel.findById(user);
        const role = User?.role;
        if (role === "usuario") {
          next();
        } else {
          res
            .status(400)
            .json({ error: "No tienes permisos para acceder a esta ruta" });
        }
      }
    }
  };
}
export default RolesMiddleware;
export const rolesMiddleware = new RolesMiddleware();
