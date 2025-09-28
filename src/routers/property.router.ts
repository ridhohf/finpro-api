// src/routers/property.router.ts
import { Router } from "express";
import { PropertyController } from "../controllers/property.controller";
import { verifyToken, requireRole } from "../middlewares/jwt-verify.middleware";
import { validateProperty } from "../middlewares/property.validation";
import roomRouter from "./room.router";
import multer from "multer";

const router = Router();
const propertyController = new PropertyController();

// Configure multer for file uploads
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

// Public routes (no auth required)
router.get("/public", propertyController.getPublicProperties);
router.get("/public/:id", propertyController.getPublicPropertyDetail);

// Nested room routes
router.use("/:propertyId/rooms", roomRouter);

// Protected routes - require authentication
router.use(verifyToken);

// Tenant-only routes
router.use(requireRole("tenant"));

// GET /properties - Get all properties for tenant
router.get("/", propertyController.getProperties);

// GET /properties/:id - Get property by ID
router.get("/:id", propertyController.getPropertyById);

// POST /properties - Create new property
router.post(
  "/",
  upload.single("picture"),
  validateProperty,
  propertyController.createProperty
);

// PUT /properties/:id - Update property
router.put(
  "/:id",
  upload.single("picture"),
  validateProperty,
  propertyController.updateProperty
);

// DELETE /properties/:id - Delete property
router.delete("/:id", propertyController.deleteProperty);

export default router;
