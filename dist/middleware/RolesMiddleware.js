"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolesMiddleware = void 0;
const UsuarioModel_1 = require("../model/UsuarioModel");
class RolesMiddleware {
    isAdmin = async (req, res, next) => {
        if (req.user) {
            const user = req.user;
            if (user) {
                const User = await UsuarioModel_1.UsuarioModel.findById(user);
                const role = User?.role;
                if (role === "admin") {
                    next();
                }
                else {
                    res
                        .status(400)
                        .json({ error: "No tienes permisos para acceder a esta ruta" });
                }
            }
        }
        else {
            res
                .status(400)
                .json({ error: "Usuario no encontrado" });
        }
    };
    isUser = async (req, res, next) => {
        if (req.user) {
            const user = req.user;
            if (user) {
                const User = await UsuarioModel_1.UsuarioModel.findById(user);
                const role = User?.role;
                if (role === "usuario") {
                    next();
                }
                else {
                    res
                        .status(400)
                        .json({ error: "No tienes permisos para acceder a esta ruta" });
                }
            }
        }
    };
}
exports.default = RolesMiddleware;
exports.rolesMiddleware = new RolesMiddleware();
