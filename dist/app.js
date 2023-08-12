"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_routemap_1 = __importDefault(require("express-routemap"));
const EnvConfig_1 = __importDefault(require("./config/EnvConfig"));
const chalk_1 = __importDefault(require("chalk"));
const express_session_1 = __importDefault(require("express-session"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// import { authJWTMiddleware } from "./middleware/AuthMiddleware";
// import { authRoutes } from "./routes/AuthRoutes";
const ConnectionDB_1 = require("./db/ConnectionDB");
const passport_1 = __importDefault(require("passport"));
const AuthRoutes_1 = require("./routes/AuthRoutes");
const AuthJWTMiddleware_1 = require("./middleware/AuthJWTMiddleware");
class App extends ConnectionDB_1.ConnectionDB {
    app;
    port;
    server;
    constructor(routes) {
        super();
        this.app = (0, express_1.default)();
        this.port = Number(EnvConfig_1.default.PORT) || 5000;
        this.initMiddlewares();
        this.initRoutes(routes);
        this.initConnection();
    }
    getServer() {
        return this.app;
    }
    closeServer(done) {
        this.server = this.app.listen(this.port, () => {
            done();
        });
    }
    async initConnection() {
        try {
            const connection = await this.connect();
            console.log(chalk_1.default.bgGreen.black("✔️  Conexión establecida 🔌 "));
            console.log(chalk_1.default.blue("---------------------------------------------------------------------------------"));
            console.log(chalk_1.default.green.bold(`🌐 ¡Se ha establecido la conexión a: ${EnvConfig_1.default.DB_NAME}!`));
            console.log(chalk_1.default.blue("---------------------------------------------------------------------------------"));
            return connection;
        }
        catch (error) {
            console.error(chalk_1.default.bgRed.white("❌ Error al establecer la conexión:"));
            console.error(error);
            throw new Error("Error al establecer la conexión");
        }
    }
    initMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, express_session_1.default)({
            secret: "env.JWT_PRIVATE_KEY",
            resave: false,
            saveUninitialized: false,
        }));
        this.app.use(passport_1.default.initialize());
        this.app.use(passport_1.default.session());
    }
    initRoutes(routes) {
        this.app.use(`/api/${EnvConfig_1.default.API_VERSION}`, AuthRoutes_1.authRoutes.router);
        routes.forEach((route) => {
            this.app.use(`/api/${EnvConfig_1.default.API_VERSION}`, AuthJWTMiddleware_1.authJWTMiddleware.validateToken, route.router);
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log();
            console.log(chalk_1.default.bgCyan.white.bold("🗺️  Rutas disponibles: 🚴 "));
            (0, express_routemap_1.default)(this.app);
            console.log(chalk_1.default.bgGreen.black("✨ Servidor en línea ✨ "));
            console.log(chalk_1.default.blue("--------------------------------------------------------------------------------"));
            console.log(chalk_1.default.green.bold(`🚀 ¡El servidor se ha levantado exitosamente en http://${EnvConfig_1.default.HOST}:${EnvConfig_1.default.PORT}!`));
            console.log(chalk_1.default.blue("--------------------------------------------------------------------------------"));
        });
    }
}
exports.default = App;
