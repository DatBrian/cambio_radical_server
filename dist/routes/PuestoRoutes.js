"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.puestoRoutes = void 0;
const express_1 = require("express");
const RouterCommon_1 = __importDefault(require("../common/RouterCommon"));
const PuestoController_1 = __importStar(require("../controller/PuestoController"));
class PuestoRoutes extends RouterCommon_1.default {
    path;
    router;
    controller;
    constructor() {
        super(PuestoController_1.default);
        this.path = "/puesto";
        this.router = (0, express_1.Router)();
        this.controller = PuestoController_1.puestoController;
        this.initRoutes();
    }
    initRoutes() {
        this.router.get(`${this.path}/all`, this.controller.getAllPuesto);
        this.router.get(`${this.path}/id`, (req, res) => {
            this.controller.getPuestoById(req, res);
        });
        this.router.post(`${this.path}/create`, (req, res) => {
            this.controller.insertPuesto(req, res);
        });
        this.router.put(`${this.path}/update`, (req, res) => {
            this.controller.updatePuesto(req, res);
        });
        this.router.delete(`${this.path}/delete`, (req, res) => {
            this.controller.deletePuesto(req, res);
        });
    }
}
exports.puestoRoutes = new PuestoRoutes();
