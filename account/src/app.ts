import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as morgan from "morgan";

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: any, port: number) {
    this.app = express();
    this.port = port;

    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(morgan("combined"));
  }

  private initializeControllers(controllers: any) {
    controllers.forEach((controller: any) => {
      this.app.use("/", controller.router);
    });
  }

  private connectToTheDatabase() {
    const { MONGO_PATH } = process.env;
    mongoose.connect(`mongodb://${MONGO_PATH}`);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
