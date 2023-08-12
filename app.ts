import express, { Application } from "express";
import { RoutesInterface } from "./interfaces/RoutesInterface";
import routemap from "express-routemap";
import env from "./config/EnvConfig";
import chalk from "chalk";
import session from "express-session";
import morgan from "morgan";
import cors from "cors";
// import { authJWTMiddleware } from "./middleware/AuthMiddleware";
// import { authRoutes } from "./routes/AuthRoutes";
import { ConnectionDB } from "./db/ConnectionDB";
import passport from "passport";
import { authRoutes } from "./routes/AuthRoutes";
import { authJWTMiddleware } from "./middleware/AuthJWTMiddleware";

class App extends ConnectionDB {
  public app: Application;
  public port: number;
  public server: any;

  constructor(routes: RoutesInterface[]) {
    super();
    this.app = express();
    this.port = Number(env.PORT) || 5000;
    this.initMiddlewares();
    this.initRoutes(routes);
    this.initConnection();
  }

  public getServer() {
    return this.app;
  }

  public closeServer(done?: any) {
    this.server = this.app.listen(this.port, () => {
      done();
    });
  }

  private async initConnection() {
    try {
      const connection = await this.connect();
      console.log(chalk.bgGreen.black("✔️  Conexión establecida 🔌 "));
      console.log(
        chalk.blue(
          "---------------------------------------------------------------------------------"
        )
      );
      console.log(
        chalk.green.bold(`🌐 ¡Se ha establecido la conexión a: ${env.DB_NAME}!`)
      );
      console.log(
        chalk.blue(
          "---------------------------------------------------------------------------------"
        )
      );
      return connection;
    } catch (error) {
      console.error(chalk.bgRed.white("❌ Error al establecer la conexión:"));
      console.error(error);
      throw new Error("Error al establecer la conexión");
    }
  }

  private initMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(
      session({
        secret: "env.JWT_PRIVATE_KEY",
        resave: false,
        saveUninitialized: false,
      })
    );
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  private initRoutes(routes: RoutesInterface[]) {
    this.app.use(`/api/${env.API_VERSION}`, authRoutes.router);
    routes.forEach((route) => {
      this.app.use(
        `/api/${env.API_VERSION}`,
        authJWTMiddleware.validateToken,
        route.router
      );
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log();
      console.log(chalk.bgCyan.white.bold("🗺️  Rutas disponibles: 🚴 "));
      routemap(this.app);
      console.log(chalk.bgGreen.black("✨ Servidor en línea ✨ "));
      console.log(
        chalk.blue(
          "--------------------------------------------------------------------------------"
        )
      );
      console.log(
        chalk.green.bold(
          `🚀 ¡El servidor se ha levantado exitosamente en http://${env.HOST}:${env.PORT}!`
        )
      );
      console.log(
        chalk.blue(
          "--------------------------------------------------------------------------------"
        )
      );
    });
  }
}
export default App;
