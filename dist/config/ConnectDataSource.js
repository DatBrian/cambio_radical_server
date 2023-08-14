"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const password = process.env.DB_PASSWORD;
const connectionString = `mongodb+srv://webcoldeveloping:${password}@cambioradicaldb.diqj3vd.mongodb.net/?retryWrites=true&w=majority`;
class DataSource {
    connect;
    constructor() {
        this.connect = mongoose_1.default.connect(connectionString);
    }
    async getConnection() {
        return this.connect;
    }
}
exports.dataSource = new DataSource();
