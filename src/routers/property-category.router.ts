import { Router } from "express";
import { PropertyCategoryController } from "../controllers/property-category.controller";
import { PropertyCategoryValidator } from "../validators/property-category.validator";
import { ValidationMiddleware } from "../middlewares/validation.middleware";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class PropertyCategoryRouter {
  private router: Router;
  private propertyCategoryController: PropertyCategoryController;

  constructor() {
    this.propertyCategoryController = new PropertyCategoryController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.use(
      AuthMiddleware.authenticate(),
      AuthMiddleware.requireRole("tenant")
    );

    this.router.get("/", this.propertyCategoryController.getCategories);

    this.router.get("/:id", this.propertyCategoryController.getCategoryById);

    this.router.post(
      "/",
      ValidationMiddleware.validate(PropertyCategoryValidator.create()),
      this.propertyCategoryController.createCategory
    );

    this.router.put(
      "/:id",
      ValidationMiddleware.validate(PropertyCategoryValidator.update()),
      this.propertyCategoryController.updateCategory
    );

    this.router.delete("/:id", this.propertyCategoryController.deleteCategory);
  }

  getRouter(): Router {
    return this.router;
  }
}
