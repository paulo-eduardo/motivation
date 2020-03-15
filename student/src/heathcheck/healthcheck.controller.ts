import * as express from "express";
import Controller from "../interfaces/controller";

class HealthcheckController implements Controller {
  public path = "/healthcheck";
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.checkHealth);
  }

  checkHealth = (_request: express.Request, response: express.Response) => {
    response.status(200).send("Server is running!");
  };
}

export default HealthcheckController;
