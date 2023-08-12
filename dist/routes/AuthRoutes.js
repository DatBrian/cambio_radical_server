"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const AuthController_1 = require("../controller/AuthController");
const RolesMiddleware_1 = require("../middleware/RolesMiddleware");
const AuthJWTMiddleware_1 = require("../middleware/AuthJWTMiddleware");
class AuthRoutes {
    path;
    router;
    controller;
    constructor() {
        this.path = "/auth";
        this.router = (0, express_1.Router)();
        this.controller = AuthController_1.authController;
        this.initRoutes();
    }
    initRoutes() {
        this.router.post(`${this.path}/signup`, AuthJWTMiddleware_1.authJWTMiddleware.validateToken, RolesMiddleware_1.rolesMiddleware.isAdmin, AuthController_1.authController.signUp);
        this.router.post(`${this.path}/signin`, AuthController_1.authController.signIn);
    }
}
exports.authRoutes = new AuthRoutes();
