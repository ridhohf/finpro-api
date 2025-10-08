import { Router } from "express";
import { PropertyCatalogController } from "../controllers/property-catalog.controller";
import { PropertyCatalogValidator } from "../validators/property-catalog.validator";
import { ValidationMiddleware } from "../middlewares/validation.middleware";
import { PropertyController } from "../controllers/property.controller";

export class PropertyCatalogRouter {
  private router: Router;
  private propertyCatalogController: PropertyCatalogController;
  private propertyController: PropertyController;

  constructor() {
    this.propertyCatalogController = new PropertyCatalogController();
    this.propertyController = new PropertyController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    
    this.router.get("/cities", this.propertyController.getCities);
    
    this.router.get(
      "/search",
      ValidationMiddleware.validate(PropertyCatalogValidator.search()),
      this.propertyCatalogController.searchProperties
    );

    this.router.get(
      "/:id/detail",
      ValidationMiddleware.validate(PropertyCatalogValidator.getDetail()),
      this.propertyCatalogController.getPropertyDetail
    );

    this.router.get(
      "/room/:roomId/calendar",
      ValidationMiddleware.validate(PropertyCatalogValidator.getRoomCalendar()),
      this.propertyCatalogController.getRoomPriceCalendar
    );
  }

  getRouter(): Router {
    return this.router;
  }
}