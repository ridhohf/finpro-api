import { Router } from "express";
import { RoomController } from "../controllers/room.controller";
import { RoomValidator } from "../validators/room.validator";
import { ValidationMiddleware } from "../middlewares/validation.middleware";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { UploadMiddleware } from "../middlewares/upload.middleware";

export class RoomRouter {
  private router: Router;
  private roomController: RoomController;

  constructor() {
    this.roomController = new RoomController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // All routes require tenant authentication
    this.router.use(
      AuthMiddleware.authenticate(),
      AuthMiddleware.requireRole("tenant")
    );

    // Get rooms by property
    this.router.get(
      "/property/:propertyId",
      this.roomController.getRoomsByProperty
    );

    // Get single room
    this.router.get("/:id", this.roomController.getRoomById);

    // Create room
    this.router.post(
      "/",
      UploadMiddleware.array("images", 10),
      UploadMiddleware.handleMulterError(),
      ValidationMiddleware.validate(RoomValidator.create()),
      this.roomController.createRoom
    );

    // Update room
    this.router.put(
      "/:id",
      UploadMiddleware.array("images", 10),
      UploadMiddleware.handleMulterError(),
      ValidationMiddleware.validate(RoomValidator.update()),
      this.roomController.updateRoom
    );

    // Delete room
    this.router.delete("/:id", this.roomController.deleteRoom);
  }

  getRouter(): Router {
    return this.router;
  }
}
