"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServices = void 0;
const FunctionsCommon_1 = require("../common/FunctionsCommon");
const UsuarioModel_1 = require("../model/UsuarioModel");
const AuthRepository_1 = require("../repositories/AuthRepository");
class AuthServices {
    repository;
    constructor() {
        this.repository = AuthRepository_1.authRepository;
    }
    async signUp(body) {
        const errors = [];
        const password = body.password;
        const username = await UsuarioModel_1.UsuarioModel.findOne({ username: body.username });
        if (password.length < 5) {
            errors.push({
                text: "La contraseña debe tener un mínimo de 5 caracteres",
            });
        }
        if (username) {
            errors.push({ text: "El usuario ya está en uso" });
        }
        if (errors.length > 0) {
            return errors;
        }
        else {
            const encryptedPassword = await UsuarioModel_1.UsuarioModel.schema.methods.encryptPassword(password);
            body.password = await encryptedPassword;
            const newUser = await this.repository.signUp(body);
            return newUser;
        }
    }
    async signIn(body) {
        const errors = [];
        const user = await this.repository.signIn(body);
        if (!user) {
            errors.push({ text: "Usuario no encontrado :(" });
        }
        else {
            const matchPassword = await UsuarioModel_1.UsuarioModel.schema.methods.matchPassword(body.password, user.password);
            if (!matchPassword) {
                errors.push({ text: "Contraseña incorrecta :(" });
            }
        }
        if (errors.length > 0) {
            return errors;
        }
        else {
            const token = await (0, FunctionsCommon_1.generateToken)({ id: user._id });
            const response = {
                token: token,
                role: user.role
            };
            return response;
        }
    }
}
exports.default = AuthServices;
exports.authServices = new AuthServices();
