"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authJWTMiddleware = void 0;
const jose_1 = require("jose");
const UsuarioModel_1 = require("../model/UsuarioModel");
class AuthJWTMiddleware {
    async validateToken(req, res, next) {
        const { authorization } = req.headers;
        if (!authorization) {
            res.status(401).send({
                token: "Ruta o Token inválidos -.-",
            });
        }
        else {
            try {
                const encoder = new TextEncoder();
                const data = await (0, jose_1.jwtVerify)(authorization, encoder.encode(process.env.JWT_PRIVATE_KEY));
                const user = await UsuarioModel_1.UsuarioModel.findById(data.payload.data.id);
                if (!user)
                    return res
                        .status(404)
                        .json({ message: "No se encuentra el usuario " });
                req.user = user._id;
                next();
            }
            catch (error) {
                console.error("Error al verificar el token:", error);
                res.status(401).send({
                    token: "Verificación fallida, ¿Y tu quién eres? >:(",
                });
            }
        }
    }
}
exports.authJWTMiddleware = new AuthJWTMiddleware();
