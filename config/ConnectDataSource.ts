import env from "./EnvConfig";
import mongoose from 'mongoose';

const password = env.DB_PASSWORD;
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