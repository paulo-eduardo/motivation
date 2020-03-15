import App from "./app";
import HealthcheckController from "./heathcheck/healthcheck.controller";
import StudentController from "./student/student.controller";
import validateEnv from "./utils/validateEnv";

validateEnv();
const app = new App(
  [new HealthcheckController(), new StudentController()],
  Number(process.env.PORT)
);

app.listen();
