"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const UsuarioModel_1 = require("../model/UsuarioModel");
passport_1.default.use("signup", new passport_local_1.Strategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true,
}, async (req, username, password, done) => {
    const user = await UsuarioModel_1.UsuarioModel.findOne({ username: username });
    if (user) {
        return done(null, false, { message: "Ya existe ese username" });
    }
    else {
        const newUser = new UsuarioModel_1.UsuarioModel();
        const body = req.body;
        newUser.username = username;
        newUser.password = newUser.schema.methods.encryptPassword(password);
        newUser.role = body.role;
        await newUser.save();
        done(null, newUser);
    }
}));
passport_1.default.use("signin", new passport_local_1.Strategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true,
}, async (_req, username, password, done) => {
    try {
        const user = await UsuarioModel_1.UsuarioModel.findOne({ username });
        if (!user) {
            return done(null, false, { message: "Usuario no encontrado" });
        }
        const isPasswordMatch = await user.schema.methods.matchPassword(password);
        if (isPasswordMatch) {
            return done(null, user);
        }
        else {
            return done(null, false, { message: "Contraseña incorrecta" });
        }
    }
    catch (error) {
        return done(error);
    }
}));
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
passport_1.default.deserializeUser(async (id, done) => {
    try {
        const user = await UsuarioModel_1.UsuarioModel.findById(id);
        done(null, user);
    }
    catch (error) {
        done(error);
    }
});
