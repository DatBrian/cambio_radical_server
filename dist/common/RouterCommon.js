"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-empty-function */
const express_1 = require("express");
class RouterCommon {
    router;
    controller;
    constructor(TController) {
        this.router = (0, express_1.Router)();
        this.controller = new TController;
        this.routes();
    }
    routes() { }
}
exports.default = RouterCommon;
