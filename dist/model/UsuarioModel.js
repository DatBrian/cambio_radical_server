"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModel = exports.usuarioSchema = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UsuarioSchema {
    schema;
    constructor() {
        this.schema = new mongoose_1.Schema({
            username: {
                type: String,
                required: true,
                unique: true,
                trim: true,
            },
            password: {
                type: String,
                required: true,
                trim: true,
            },
            role: {
                type: String,
                required: true,
                trim: true,
            },
        }, {
            timestamps: true,
            versionKey: false,
        });
        this.schema.set("toJSON", {
            transform: (_document, returnedObject) => {
                returnedObject.id = returnedObject._id;
                delete returnedObject._id;
            },
        });
        this.schema.methods.encryptPassword = async (password) => {
            const salt = await bcryptjs_1.default.genSalt(10);
            const hash = await bcryptjs_1.default.hash(password, salt);
            return hash;
        };
        this.schema.methods.matchPassword = async function (password, recPassword) {
            return await bcryptjs_1.default.compare(password, recPassword);
        };
    }
    getModel() {
        const Usuario = (0, mongoose_1.model)("Usuario", this.schema);
        return Usuario;
    }
}
exports.usuarioSchema = new UsuarioSchema();
exports.UsuarioModel = new UsuarioSchema().getModel();
exports.default = UsuarioSchema;
