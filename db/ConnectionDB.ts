import env from '../config/EnvConfig';
import { connect, Connection } from 'mongoose';

const user = env.DB_USER;
const password = env.DB_PASSWORD;
const dbName = env.DB_NAME;
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