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
exports.barrioRoutes = void 0;
const express_1 = require("express");
const RouterCommon_1 = __importDefault(require("../common/RouterCommon"));
const BarrioController_1 = __importStar(require("../controller/BarrioController"));
class BarrioRoutes extends RouterCommon_1.default {
    path;
    router;
    controller;
    constructor() {
        super(BarrioController_1.default);
        this.path = "/barrio";
        this.router = (0, express_1.Router)();
        this.controller = BarrioController_1.barrioController;
        this.initRoutes();
    }
    initRoutes() {
        this.router.get(`${this.path}/all`, this.controller.getAllBarrio);
        this.router.get(`${this.path}/id`, (req, res) => {
            this.controller.getBarrioById(req, res);
        });
        this.router.post(`${this.path}/create`, (req, res) => {
            this.controller.insertBarrio(req, res);
        });
        this.router.put(`${this.path}/update`, (req, res) => {
            this.controller.updateBarrio(req, res);
        });
        this.router.delete(`${this.path}/delete`, (req, res) => {
            this.controller.deleteBarrio(req, res);
        });
    }
}
exports.barrioRoutes = new BarrioRoutes();
