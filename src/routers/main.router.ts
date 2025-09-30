import { Router } from "express";
import { AuthRouter } from "./auth.router";
import { PropertyCategoryRouter } from "./property-category.router";
import { PropertyRouter } from "./property.router";
import { RoomRouter } from "./room.router";
import { RoomAvailabilityRouter } from "./room-availability.router";
import { PeakSeasonRouter } from "./peak-season.router";
import { PropertyCatalogRouter } from "./property-catalog.router";

export class MainRouter {
  private router: Router;
  private authRouter: AuthRouter;
  private propertyCategoryRouter: PropertyCategoryRouter;
  private propertyRouter: PropertyRouter;
  private roomRouter: RoomRouter;
  private roomAvailabilityRouter: RoomAvailabilityRouter;
  private peakSeasonRouter: PeakSeasonRouter;
  private propertyCatalogRouter: PropertyCatalogRouter;

  constructor() {
    this.router = Router();
    this.authRouter = new AuthRouter();
    this.propertyCategoryRouter = new PropertyCategoryRouter();
    this.propertyRouter = new PropertyRouter();
    this.roomRouter = new RoomRouter();
    this.roomAvailabilityRouter = new RoomAvailabilityRouter();
    this.peakSeasonRouter = new PeakSeasonRouter();
    this.propertyCatalogRouter = new PropertyCatalogRouter();

    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // Authentication routes
    this.router.use("/api/auth", this.authRouter.getRouter());

    // Tenant routes (protected)
    this.router.use(
      "/api/tenant/categories",
      this.propertyCategoryRouter.getRouter()
    );
    this.router.use("/api/tenant/properties", this.propertyRouter.getRouter());
    this.router.use("/api/tenant/rooms", this.roomRouter.getRouter());
    this.router.use(
      "/api/tenant/room-availability",
      this.roomAvailabilityRouter.getRouter()
    );
    this.router.use(
      "/api/tenant/peak-seasons",
      this.peakSeasonRouter.getRouter()
    );

    // Public routes
    this.router.use("/api/properties", this.propertyCatalogRouter.getRouter());
  }

  public getRouter(): Router {
    return this.router;
  }
}
