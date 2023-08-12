import { Request, Response, NextFunction } from "express";
import { jwtVerify } from "jose";
import { UsuarioModel } from "../model/UsuarioModel";

class AuthJWTMiddleware {
  public async validateToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { authorization } = req.headers;

    if (!authorization) {
      res.status(401).send({
        token: "Ruta o Token inválidos -.-",
      });
    } else {
      try {
        const encoder = new TextEncoder();
        const data: any = await jwtVerify(
          authorization,
          encoder.encode(process.env.JWT_PRIVATE_KEY)
        );

        const user = await UsuarioModel.findById(data.payload.data.id);

        if (!user)
          return res
            .status(404)
            .json({ message: "No se encuentra el usuario " });

        req.user = user._id;

        next();
      } catch (error: any) {
        console.error("Error al verificar el token:", error);
        res.status(401).send({
          token: "Verificación fallida, ¿Y tu quién eres? >:(",
        });
      }
    }
  }
}
export const authJWTMiddleware = new AuthJWTMiddleware();
