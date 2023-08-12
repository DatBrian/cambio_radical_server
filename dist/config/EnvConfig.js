"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const chalk_1 = __importDefault(require("chalk"));
const result = (0, dotenv_1.config)();
result.error
    ? (console.error('Error al cargar las variables de entorno:', result.error), process.exit(1))
    : console.log(chalk_1.default.bgMagenta.black('💻 Variables de entorno cargadas correctamente!!🔐 '));
const env = { ...result.parsed };
delete process.env['DOTENV_CONFIG'];
exports.default = env;
