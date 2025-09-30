import { Router } from "express";
import { PeakSeasonController } from "../controllers/peak-season.controller";
import { PeakSeasonValidator } from "../validators/peak-season.validator";
import { ValidationMiddleware } from "../middlewares/validation.middleware";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class PeakSeasonRouter {
  private router: Router;
  private peakSeasonController: PeakSeasonController;

  constructor() {
    this.peakSeasonController = new PeakSeasonController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // All routes require tenant authentication
    this.router.use(
      AuthMiddleware.authenticate(),
      AuthMiddleware.requireRole("tenant")
    );

    // Get peak seasons for a room
    this.router.get("/room/:roomId", this.peakSeasonController.getPeakSeasons);

    // Get single peak season
    this.router.get("/:id", this.peakSeasonController.getPeakSeasonById);

    // Create peak season
    this.router.post(
      "/",
      ValidationMiddleware.validate(PeakSeasonValidator.create()),
      this.peakSeasonController.createPeakSeason
    );

    // Update peak season
    this.router.put(
      "/:id",
      ValidationMiddleware.validate(PeakSeasonValidator.update()),
      this.peakSeasonController.updatePeakSeason
    );

    // Delete peak season
    this.router.delete("/:id", this.peakSeasonController.deletePeakSeason);
  }

  getRouter(): Router {
    return this.router;
  }
}
