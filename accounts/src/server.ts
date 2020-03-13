import App from "./app";
import HealthcheckController from "./healthcheck/healthcheck.controller";

const app = new App([new HealthcheckController()], 5000);

app.listen();
