import { connect, Connection } from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const uri = `mongodb+srv://${user}:${password}@${dbName}.diqj3vd.mongodb.net/?retryWrites=true&w=majority`;

class ConnectionDB {
    private mongooseConnection: Connection | null | any;

    constructor() {
        this.mongooseConnection = null;
    }

    public async connect() {
        if (!this.mongooseConnection) {
            this.mongooseConnection = await connect(uri);
        }
        return this.mongooseConnection;
    }
}

export { ConnectionDB };