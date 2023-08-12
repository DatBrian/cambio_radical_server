"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRepository = void 0;
const QueriesCommon_1 = __importDefault(require("../common/QueriesCommon"));
const UsuarioModel_1 = require("../model/UsuarioModel");
const FunctionsCommon_1 = require("../common/FunctionsCommon");
class AuthRepository extends QueriesCommon_1.default {
    model;
    constructor(model = UsuarioModel_1.UsuarioModel) {
        super(model);
        this.model = model;
    }
    async signUp(body) {
        try {
            const inserted = await this.insert(body);
            const user = await UsuarioModel_1.UsuarioModel.findOne({ username: body.username });
            const data = { id: user._id };
            const token = await (0, FunctionsCommon_1.generateToken)(data);
            const response = { status: inserted, token: token };
            return response;
        }
        catch (error) {
            console.error("Error al registrar el usuario:", error);
            throw new Error("Error al registrar el usuario");
        }
    }
    async signIn(body) {
        try {
            const username = body.username;
            const user = await UsuarioModel_1.UsuarioModel.findOne({ username: username });
            return user;
        }
        catch (error) {
            console.error("Error al iniciar sesión", error);
            throw error;
        }
    }
}
exports.default = AuthRepository;
exports.authRepository = new AuthRepository();
