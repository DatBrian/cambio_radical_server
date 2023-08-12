"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuestoModel = void 0;
const mongoose_1 = require("mongoose");
class PuestoSchema {
    schema;
    constructor() {
        this.schema = new mongoose_1.Schema({
            name: {
                type: String,
                required: true,
                unique: true,
                trim: true,
            },
            zona: {
                type: String,
                required: true,
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
        const Puesto = (0, mongoose_1.model)("Puesto", this.schema);
        return Puesto;
    }
}
exports.PuestoModel = new PuestoSchema().getModel();
exports.default = PuestoSchema;
