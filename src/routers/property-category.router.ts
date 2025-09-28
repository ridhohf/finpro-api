// src/routers/property-category.router.ts
import { Router } from 'express';
import { PropertyCategoryController } from '../controllers/property-category.controller';
import { verifyToken, requireRole } from '../middlewares/jwt-verify.middleware';
import { validatePropertyCategory } from '../middlewares/property-category.validation';

const router = Router();
const propertyCategoryController = new PropertyCategoryController();

// All routes require authentication and tenant role
router.use(verifyToken);
router.use(requireRole('tenant'));

// GET /property-categories - Get all categories with pagination, search, and sorting
router.get('/', propertyCategoryController.getCategories);

// GET /property-categories/:id - Get category by ID
router.get('/:id', propertyCategoryController.getCategoryById);

// POST /property-categories - Create new category
router.post('/', validatePropertyCategory, propertyCategoryController.createCategory);

// PUT /property-categories/:id - Update category
router.put('/:id', validatePropertyCategory, propertyCategoryController.updateCategory);

// DELETE /property-categories/:id - Delete category
router.delete('/:id', propertyCategoryController.deleteCategory);

export default router;