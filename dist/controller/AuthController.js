"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = exports.AuthController = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const AuthServices_1 = require("../services/AuthServices");
class AuthController {
    service;
    constructor() {
        this.service = AuthServices_1.authServices;
    }
    signUp = async (req, res) => {
        const { username, password, role } = req.body;
        const response = await this.service.signUp({
            username,
            password,
            role,
        });
        res.json(response);
    };
    signIn = async (req, res) => {
        const { username, password } = req.body;
        const data = await this.service.signIn({ username, password });
        if (data[0]) {
            res.json(data);
        }
        else {
            const response = {
                status: "Usuario encontrado :D",
                token: data.token,
                role: data.role,
            };
            res.json(response);
        }
    };
}
exports.AuthController = AuthController;
exports.default = AuthController;
exports.authController = new AuthController();
