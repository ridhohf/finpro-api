import { Router } from "express";
import { PropertyController } from "../controllers/property.controller";
import { PropertyValidator } from "../validators/property.validator";
import { ValidationMiddleware } from "../middlewares/validation.middleware";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { UploadMiddleware } from "../middlewares/upload.middleware";

export class PropertyRouter {
  private router: Router;
  private propertyController: PropertyController;

  constructor() {
    this.propertyController = new PropertyController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // Public route
    this.router.get("/cities", this.propertyController.getCities);

    // Tenant-only routes
    this.router.use(
      AuthMiddleware.authenticate(),
      AuthMiddleware.requireRole("tenant")
    );

    this.router.get(
      "/",
      ValidationMiddleware.validate(PropertyValidator.getList()),
      this.propertyController.getProperties
    );

    this.router.get("/:id", this.propertyController.getPropertyById);

    this.router.post(
      "/",
      UploadMiddleware.array("images", 10),
      UploadMiddleware.handleMulterError(),
      ValidationMiddleware.validate(PropertyValidator.create()),
      this.propertyController.createProperty
    );

    this.router.put(
      "/:id",
      UploadMiddleware.array("images", 10),
      UploadMiddleware.handleMulterError(),
      ValidationMiddleware.validate(PropertyValidator.update()),
      this.propertyController.updateProperty
    );

    this.router.delete("/:id", this.propertyController.deleteProperty);
  }

  getRouter(): Router {
    return this.router;
  }
}
