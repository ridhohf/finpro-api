import { Router } from "express";
import { RoomAvailabilityController } from "../controllers/room-availability.controller";
import { RoomAvailabilityValidator } from "../validators/room-availability.validator";
import { ValidationMiddleware } from "../middlewares/validation.middleware";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class RoomAvailabilityRouter {
  private router: Router;
  private roomAvailabilityController: RoomAvailabilityController;

  constructor() {
    this.roomAvailabilityController = new RoomAvailabilityController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // All routes require tenant authentication
    this.router.use(
      AuthMiddleware.authenticate(),
      AuthMiddleware.requireRole("tenant")
    );

    // Get availability for a month
    this.router.get(
      "/:roomId",
      ValidationMiddleware.validate(
        RoomAvailabilityValidator.getAvailability()
      ),
      this.roomAvailabilityController.getAvailability
    );

    // Update single date availability
    this.router.put(
      "/:roomId/single",
      ValidationMiddleware.validate(RoomAvailabilityValidator.updateSingle()),
      this.roomAvailabilityController.updateSingleAvailability
    );

    // Bulk update availability
    this.router.put(
      "/:roomId/bulk",
      ValidationMiddleware.validate(RoomAvailabilityValidator.bulkUpdate()),
      this.roomAvailabilityController.bulkUpdateAvailability
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
