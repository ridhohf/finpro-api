// src/routers/peak-season.router.ts
import { Router } from "express";
import { PeakSeasonController } from "../controllers/peak-season.controller";
import { verifyToken, requireRole } from "../middlewares/jwt-verify.middleware";
import { validatePeakSeason } from "../middlewares/peak-season.validation";

const router = Router({ mergeParams: true }); // Important for nested routes
const peakSeasonController = new PeakSeasonController();

// All routes require authentication and tenant role
router.use(verifyToken);
router.use(requireRole("tenant"));

// GET /properties/:propertyId/rooms/:roomId/peak-seasons - Get all peak seasons for a room
router.get("/", peakSeasonController.getPeakSeasons);

// GET /properties/:propertyId/rooms/:roomId/peak-seasons/:seasonId - Get peak season by ID
router.get("/:seasonId", peakSeasonController.getPeakSeasonById);

// POST /properties/:propertyId/rooms/:roomId/peak-seasons - Create new peak season
router.post("/", validatePeakSeason, peakSeasonController.createPeakSeason);

// PUT /properties/:propertyId/rooms/:roomId/peak-seasons/:seasonId - Update peak season
router.put(
  "/:seasonId",
  validatePeakSeason,
  peakSeasonController.updatePeakSeason
);

// DELETE /properties/:propertyId/rooms/:roomId/peak-seasons/:seasonId - Delete peak season
router.delete("/:seasonId", peakSeasonController.deletePeakSeason);

export default router;
