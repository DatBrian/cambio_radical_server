"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const BarrioRoutes_1 = require("./routes/BarrioRoutes");
const PuestoRoutes_1 = require("./routes/PuestoRoutes");
const VotanteRoutes_1 = require("./routes/VotanteRoutes");
const app = new app_1.default([VotanteRoutes_1.votanteRoutes, BarrioRoutes_1.barrioRoutes, PuestoRoutes_1.puestoRoutes]);
app.listen();
