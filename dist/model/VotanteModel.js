"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.votanteModel = void 0;
const mongoose_1 = require("mongoose");
class VotanteSchema {
    schema;
    constructor() {
        this.schema = new mongoose_1.Schema({
            name: {
                type: String,
                unique: true,
                trim: true,
            },
            lider: {
                type: String,
                trim: true,
            },
            doc: {
                type: Number,
                unique: true,
                trim: true,
            },
            genero: {
                type: String,
                trim: true,
            },
            celular: {
                type: Number,
                trim: true,
            },
            nacimiento: {
                type: Date,
                trim: true,
            },
            telefono: {
                type: Number,
                trim: true,
            },
            direccion: {
                type: String,
                trim: true,
            },
            barrio: {
                type: String,
                trim: true,
            },
            comuna: {
                type: Number,
                trim: true,
            },
            email: {
                type: String,
                trim: true,
            },
            profesion: {
                type: String,
                trim: true,
            },
            ocupacion: {
                type: String,
                trim: true,
            },
            RS: [
                {
                    type: Object,
                    required: false,
                    trim: true,
                },
            ],
            PuestoVotacion: {
                type: String,
                trim: true,
            },
            MesaVotacion: {
                type: Number,
                trim: true,
            },
            compromiso: {
                type: String,
                trim: true,
            },
            fidelidad: {
                type: String,
                trim: true,
            },
        }, {
            timestamps: true,
            versionKey: false,
        });
        this.schema.set("toJSON", {
            transform: (_document, returnedObject) => {
                returnedObject.id = returnedObject._id;
                delete returnedObject._id;
            },
        });
    }
    getModel() {
        const votante = (0, mongoose_1.model)("Votante", this.schema);
        return votante;
    }
}
exports.votanteModel = new VotanteSchema().getModel();
exports.default = VotanteSchema;
