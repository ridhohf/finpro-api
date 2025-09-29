import { Router } from "express";
import { AuthRouter } from "./auth.router";

export class MainRouter {
  private router: Router;
  private authRouter: AuthRouter;

  constructor() {
    this.router = Router();
    this.authRouter = new AuthRouter();

    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.use("/api/auth", this.authRouter.getRouter());
  }

  public getRouter(): Router {
    return this.router;
  }
}
