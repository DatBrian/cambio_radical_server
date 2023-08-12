import App from "./app";
import { barrioRoutes } from "./routes/BarrioRoutes";
import { puestoRoutes } from "./routes/PuestoRoutes";
import { votanteRoutes } from "./routes/VotanteRoutes";

const app = new App([votanteRoutes, barrioRoutes, puestoRoutes]);

app.listen();
