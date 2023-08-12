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
exports.votanteRoutes = void 0;
const express_1 = require("express");
const RouterCommon_1 = __importDefault(require("../common/RouterCommon"));
const VotanteController_1 = __importStar(require("../controller/VotanteController"));
const RolesMiddleware_1 = require("../middleware/RolesMiddleware");
class VotanteRoutes extends RouterCommon_1.default {
    path;
    router;
    controller;
    constructor() {
        super(VotanteController_1.default);
        this.path = "/votante";
        this.router = (0, express_1.Router)();
        this.controller = VotanteController_1.votanteController;
        this.initRoutes();
    }
    initRoutes() {
        this.router.get(`${this.path}/all`, RolesMiddleware_1.rolesMiddleware.isAdmin, this.controller.getAllVotante);
        this.router.get(`${this.path}/id`, RolesMiddleware_1.rolesMiddleware.isAdmin, (req, res) => {
            this.controller.getVotanteById(req, res);
        });
        this.router.post(`${this.path}/create`, RolesMiddleware_1.rolesMiddleware.isUser, (req, res) => {
            this.controller.insertVotante(req, res);
        });
        this.router.post(`${this.path}/verifyDoc`, (req, res) => {
            RolesMiddleware_1.rolesMiddleware.isUser, this.controller.verifyDoc(req, res);
        });
        this.router.put(`${this.path}/update`, RolesMiddleware_1.rolesMiddleware.isAdmin, (req, res) => {
            this.controller.updateVotante(req, res);
        });
        this.router.delete(`${this.path}/delete`, RolesMiddleware_1.rolesMiddleware.isAdmin, (req, res) => {
            this.controller.deleteVotante(req, res);
        });
    }
}
exports.votanteRoutes = new VotanteRoutes();
