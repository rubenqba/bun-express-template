import { Router } from "express";
import { IRouter } from "./router.interface";

// Init router
const router = Router();

class BaseRouter implements IRouter {
  // eslint-disable-line
  get routes() {
    //router.use("/users", userRouter.routes);
    return router;
  }
}

export default new BaseRouter();
