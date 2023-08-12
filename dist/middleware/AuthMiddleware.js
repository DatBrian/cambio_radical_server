"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helpers {
    static isAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/auth/login');
    }
}
exports.default = Helpers;
