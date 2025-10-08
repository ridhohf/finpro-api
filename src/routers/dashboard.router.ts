import { Router } from "express";
import { DashboardController } from "../controllers/dashboard.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class DashboardRouter {
  private router: Router;
  private dashboardController: DashboardController;

  constructor() {
    this.dashboardController = new DashboardController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // Protected route - tenant only
    this.router.use(
      AuthMiddleware.authenticate(),
      AuthMiddleware.requireRole("tenant")
    );

    // Get dashboard data
    this.router.get("/", this.dashboardController.getTenantDashboard);
  }

  getRouter(): Router {
    return this.router;
  }
}
