// src/services/property-category.service.ts
import { PrismaClient } from "../generated/prisma";
import { AppError } from "../utils/app.error";
import logger from "../utils/logger";

const prisma = new PrismaClient();

interface GetCategoriesParams {
  tenantId: number;
  page: number;
  limit: number;
  search?: string;
  sortBy: string;
  sortOrder: "asc" | "desc";
}

interface CreateCategoryData {
  tenantId: number;
  name: string;
  description: string;
}

interface UpdateCategoryData {
  name?: string;
  description?: string;
}

class PropertyCategoryService {
  async getCategories(params: GetCategoriesParams) {
    const { tenantId, page, limit, search, sortBy, sortOrder } = params;

    const offset = (page - 1) * limit;

    // Build where clause
    const whereClause: any = {
      tenantId,
    };

    if (search) {
      whereClause.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    // Build order by clause
    const orderByClause: any = {};
    if (sortBy === "name" || sortBy === "description") {
      orderByClause[sortBy] = sortOrder;
    } else {
      orderByClause.name = "asc"; // default sorting
    }

    // Execute queries
    const [categories, total] = await Promise.all([
      prisma.propertyCategories.findMany({
        where: whereClause,
        orderBy: orderByClause,
        skip: offset,
        take: limit,
        include: {
          _count: {
            select: { properties: true },
          },
        },
      }),
      prisma.propertyCategories.count({
        where: whereClause,
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    logger.info(
      `Retrieved ${categories.length} categories for tenant ${tenantId}`
    );

    return {
      categories,
      page,
      limit,
      total,
      totalPages,
    };
  }

  async getCategoryById(id: number, tenantId: number) {
    const category = await prisma.propertyCategories.findFirst({
      where: {
        id,
        tenantId,
      },
      include: {
        _count: {
          select: { properties: true },
        },
      },
    });

    return category;
  }

  async createCategory(data: CreateCategoryData) {
    const { tenantId, name, description } = data;

    // Check if category name already exists for this tenant
    const existingCategory = await prisma.propertyCategories.findFirst({
      where: {
        tenantId,
        name: { equals: name, mode: "insensitive" },
      },
    });

    if (existingCategory) {
      throw new AppError("Category with this name already exists", 409);
    }

    const category = await prisma.propertyCategories.create({
      data: {
        tenantId,
        name,
        description,
      },
      include: {
        _count: {
          select: { properties: true },
        },
      },
    });

    logger.info(`Category created: ${name} by tenant ${tenantId}`);

    return category;
  }

  async updateCategory(id: number, tenantId: number, data: UpdateCategoryData) {
    // Check if category exists and belongs to tenant
    const existingCategory = await prisma.propertyCategories.findFirst({
      where: {
        id,
        tenantId,
      },
    });

    if (!existingCategory) {
      throw new AppError("Category not found", 404);
    }

    // If updating name, check for duplicates
    if (data.name) {
      const duplicateCategory = await prisma.propertyCategories.findFirst({
        where: {
          tenantId,
          name: { equals: data.name, mode: "insensitive" },
          NOT: { id },
        },
      });

      if (duplicateCategory) {
        throw new AppError("Category with this name already exists", 409);
      }
    }

    const category = await prisma.propertyCategories.update({
      where: { id },
      data,
      include: {
        _count: {
          select: { properties: true },
        },
      },
    });

    logger.info(`Category updated: ${category.name} by tenant ${tenantId}`);

    return category;
  }

  async deleteCategory(id: number, tenantId: number) {
    // Check if category exists and belongs to tenant
    const existingCategory = await prisma.propertyCategories.findFirst({
      where: {
        id,
        tenantId,
      },
      include: {
        _count: {
          select: { properties: true },
        },
      },
    });

    if (!existingCategory) {
      throw new AppError("Category not found", 404);
    }

    // Check if category is being used by properties
    if (existingCategory._count.properties > 0) {
      throw new AppError(
        "Cannot delete category that is being used by properties",
        400
      );
    }

    await prisma.propertyCategories.delete({
      where: { id },
    });

    logger.info(
      `Category deleted: ${existingCategory.name} by tenant ${tenantId}`
    );
  }
}

export default new PropertyCategoryService();
