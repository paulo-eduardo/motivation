import App from "./app";
import HealthcheckController from "./healthcheck/healthcheck.controller";
import validateEnv from "./utils/validateEnv";

validateEnv();
const app = new App([new HealthcheckController()], 5000);

app.listen();
