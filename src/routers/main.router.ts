<<<<<<< HEAD
import { Router } from "express";
import { AuthRouter } from "./auth.router";
import { PropertyCategoryRouter } from "./property-category.router";
import { PropertyRouter } from "./property.router";
import { RoomRouter } from "./room.router";
import { RoomAvailabilityRouter } from "./room-availability.router";
import { PeakSeasonRouter } from "./peak-season.router";
import { PropertyCatalogRouter } from "./property-catalog.router";
import { DashboardRouter } from "./dashboard.router";

export class MainRouter {
  private router: Router;
  private authRouter: AuthRouter;
  private dashboardRouter: DashboardRouter;
  private propertyCategoryRouter: PropertyCategoryRouter;
  private propertyRouter: PropertyRouter;
  private roomRouter: RoomRouter;
  private roomAvailabilityRouter: RoomAvailabilityRouter;
  private peakSeasonRouter: PeakSeasonRouter;
  private propertyCatalogRouter: PropertyCatalogRouter;

  constructor() {
    this.router = Router();
    this.authRouter = new AuthRouter();
    this.dashboardRouter = new DashboardRouter();
    this.propertyCategoryRouter = new PropertyCategoryRouter();
    this.propertyRouter = new PropertyRouter();
    this.roomRouter = new RoomRouter();
    this.roomAvailabilityRouter = new RoomAvailabilityRouter();
    this.peakSeasonRouter = new PeakSeasonRouter();
    this.propertyCatalogRouter = new PropertyCatalogRouter();
=======
import { Router, Request, Response } from 'express';
import transactionRoutes from './transaction.routes';
import reviewRoutes from './review.routes';
import reportRoutes from './report.routes';

export class MainRouter {
  private router: Router;

  constructor() {
    this.router = Router();
>>>>>>> feat/feature-2

    this.initializeRoutes();
  }

  private initializeRoutes(): void {
<<<<<<< HEAD
    // Authentication routes
    this.router.use("/auth", this.authRouter.getRouter());

    // Tenant routes (protected)
    this.router.use("/tenant/dashboard", this.dashboardRouter.getRouter());
    this.router.use(
      "/tenant/categories",
      this.propertyCategoryRouter.getRouter()
    );
    this.router.use("/tenant/properties", this.propertyRouter.getRouter());
    this.router.use("/tenant/rooms", this.roomRouter.getRouter());
    this.router.use(
      "/tenant/room-availability",
      this.roomAvailabilityRouter.getRouter()
    );
    this.router.use(
      "/tenant/peak-seasons",
      this.peakSeasonRouter.getRouter()
    );

    // Public routes
    this.router.use("/properties", this.propertyCatalogRouter.getRouter());
=======
    // Health check endpoint
    this.router.get('/health', (req: Request, res: Response) => {
      res.json({ status: 'OK', timestamp: new Date().toISOString() });
    });

    // User routes (protected - requires user authentication)
    this.router.use('/transactions', transactionRoutes);

    // Public routes (accessible without authentication)
    this.router.use('/reviews', reviewRoutes);
>>>>>>> feat/feature-2
  }

  public getRouter(): Router {
    return this.router;
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> feat/feature-2
