"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarrioModel = void 0;
const mongoose_1 = require("mongoose");
class BarrioSchema {
    schema;
    constructor() {
        this.schema = new mongoose_1.Schema({
            name: {
                type: String,
                required: true,
                unique: true,
                trim: true,
            },
            comuna: {
                type: Number,
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
        const Barrio = (0, mongoose_1.model)("Barrio", this.schema);
        return Barrio;
    }
}
exports.BarrioModel = new BarrioSchema().getModel();
exports.default = BarrioSchema;
