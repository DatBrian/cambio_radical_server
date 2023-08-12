"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jose_1 = require("jose");
async function generateToken(data) {
    try {
        const encoder = new TextEncoder();
        const jwt = await new jose_1.SignJWT({ data })
            .setProtectedHeader({
            alg: "HS256",
            typ: "JWT",
        })
            .setIssuedAt()
            .setExpirationTime("24h")
            .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        return jwt;
    }
    catch (error) {
        console.error("Error al generar el token", error);
        throw error;
    }
}
exports.generateToken = generateToken;
