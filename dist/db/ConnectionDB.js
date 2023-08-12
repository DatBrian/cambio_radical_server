"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionDB = void 0;
const EnvConfig_1 = __importDefault(require("../config/EnvConfig"));
const mongoose_1 = require("mongoose");
const user = EnvConfig_1.default.DB_USER;
const password = EnvConfig_1.default.DB_PASSWORD;
const dbName = EnvConfig_1.default.DB_NAME;
const uri = `mongodb+srv://${user}:${password}@${dbName}.diqj3vd.mongodb.net/?retryWrites=true&w=majority`;
class ConnectionDB {
    mongooseConnection;
    constructor() {
        this.mongooseConnection = null;
    }
    async connect() {
        if (!this.mongooseConnection) {
            this.mongooseConnection = await (0, mongoose_1.connect)(uri);
        }
        return this.mongooseConnection;
    }
}
exports.ConnectionDB = ConnectionDB;
