// src/routers/room.router.ts
import { Router } from "express";
import { RoomController } from "../controllers/room.controller";
import { verifyToken, requireRole } from "../middlewares/jwt-verify.middleware";
import { validateRoom } from "../middlewares/room.validation";
import peakSeasonRouter from "./peak-season.router";
import multer from "multer";

const router = Router({ mergeParams: true }); // Important for nested routes
const roomController = new RoomController();

// Configure multer for room image uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024, // 1MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});

// Public route for getting room pricing
router.get("/:roomId/pricing", roomController.getRoomPricing);

// Nested peak season routes
router.use("/:roomId/peak-seasons", peakSeasonRouter);

// Protected routes - require authentication
router.use(verifyToken);
router.use(requireRole("tenant"));

// GET /properties/:propertyId/rooms - Get all rooms for a property
router.get("/", roomController.getRooms);

// GET /properties/:propertyId/rooms/:roomId - Get room by ID
router.get("/:roomId", roomController.getRoomById);

// POST /properties/:propertyId/rooms - Create new room
router.post(
  "/",
  upload.single("picture"),
  validateRoom,
  roomController.createRoom
);

// PUT /properties/:propertyId/rooms/:roomId - Update room
router.put(
  "/:roomId",
  upload.single("picture"),
  validateRoom,
  roomController.updateRoom
);

// DELETE /properties/:propertyId/rooms/:roomId - Delete room
router.delete("/:roomId", roomController.deleteRoom);

// GET /properties/:propertyId/rooms/:roomId/availability - Get room availability
router.get("/:roomId/availability", roomController.getRoomAvailability);

// PUT /properties/:propertyId/rooms/:roomId/availability - Update room availability
router.put("/:roomId/availability", roomController.updateRoomAvailability);

export default router;
