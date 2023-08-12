"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModel = void 0;
const mongoose_1 = require("mongoose");
class RoleSchema {
    schema;
    constructor() {
        this.schema = new mongoose_1.Schema({
            name: {
                type: String,
                required: true,
                unique: true,
                trim: true
            }
        }, {
            versionKey: false
        });
        this.schema.set('toJSON', {
            transform: (_document, returnedObject) => {
                returnedObject.id = returnedObject._id;
                delete returnedObject._id;
            }
        });
    }
    getModel() {
        const Role = (0, mongoose_1.model)('Role', this.schema);
        return Role;
    }
}
exports.RoleModel = new RoleSchema().getModel();
exports.default = RoleSchema;
