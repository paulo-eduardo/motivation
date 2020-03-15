import * as express from "express";

class HealthcheckController {
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
