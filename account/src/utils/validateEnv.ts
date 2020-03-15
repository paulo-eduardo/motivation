import { cleanEnv, str, port } from "envalid";

const validateEnv = () => {
  cleanEnv(process.env, {
    MONGO_PATH: str(),
    PORT: port()
  });
};

export default validateEnv;
