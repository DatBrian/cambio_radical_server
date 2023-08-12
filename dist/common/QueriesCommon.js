"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConnectionDB_1 = require("../db/ConnectionDB");
class QueriesCommon {
    model;
    connection;
    constructor(model) {
        this.model = model;
        this.connection = new ConnectionDB_1.ConnectionDB();
    }
    async getAll() {
        try {
            await this.connection.connect();
            const query = this.model.find();
            const docs = await query.exec();
            return docs;
        }
        catch (error) {
            console.error('Error executing query:', error);
            throw new Error('Error executing query');
        }
    }
    async getOneById(id) {
        try {
            const query = this.model.findById(id);
            const doc = await query.exec();
            return doc;
        }
        catch (error) {
            console.error('Error executing query:', error);
            throw new Error('Error executing query');
        }
    }
    async insert(doc) {
        try {
            await this.connection.connect();
            await this.model.create(doc);
            return 'Insertado correctamente :D';
        }
        catch (error) {
            console.error('Error executing query:', error);
            throw new Error('Error executing query');
        }
    }
    async put(id, doc) {
        try {
            const updates = doc;
            await this.model.findByIdAndUpdate(id, updates);
            return 'Actualizado correctamente :D';
        }
        catch (error) {
            console.error('Error executing query:', error);
            throw new Error('Error executing query');
        }
    }
    async delete(id) {
        try {
            await this.model.findByIdAndDelete(id);
            return `${this.model.collection.name} eliminado correctamente :D`;
        }
        catch (error) {
            console.error('Error executing query:', error);
            throw new Error('Error executing query');
        }
    }
}
exports.default = QueriesCommon;
