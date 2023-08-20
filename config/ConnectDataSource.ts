import dotenv  from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const password = process.env.DB_PASSWORD;
const connectionString = `mongodb+srv://webcoldeveloping:${password}@cambioradicaldb.diqj3vd.mongodb.net/?retryWrites=true&w=majority`;

class DataSource {
    private connect;

    constructor() {
        this.connect = mongoose.connect(connectionString);
    }

    async getConnection() {
        return this.connect;
    }
}

export const dataSource: DataSource = new DataSource();