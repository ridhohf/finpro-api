import prisma from "../utils/prisma";
import { AppError } from "../utils/app.error";

interface CreateCategoryDTO {
  name: string;
  description: string;
}

interface UpdateCategoryDTO {
  name?: string;
  description?: string;
}

export class PropertyCategoryService {
  async getCategories(tenantId: number) {
    const categories = await prisma.propertyCategories.findMany({
      where: { tenantId },
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        description: true,
        _count: {
          select: {
            properties: true,
          },
        },
      },
    });

    return categories;
  }

  async getCategoryById(categoryId: number, tenantId: number) {
    const category = await prisma.propertyCategories.findFirst({
      where: {
        id: categoryId,
        tenantId,
      },
      include: {
        _count: {
          select: {
            properties: true,
          },
        },
      },
    });

    if (!category) {
      throw new AppError("Category not found", 404);
    }

    return category;
  }

  async createCategory(tenantId: number, data: CreateCategoryDTO) {
    // Check if category name already exists for this tenant
    const existingCategory = await prisma.propertyCategories.findFirst({
      where: {
        tenantId,
        name: {
          equals: data.name,
          mode: "insensitive",
        },
      },
    });

    if (existingCategory) {
      throw new AppError("Category with this name already exists", 400);
    }

    const category = await prisma.propertyCategories.create({
      data: {
        tenantId,
        name: data.name,
        description: data.description,
      },
    });

    return category;
  }

  async updateCategory(
    categoryId: number,
    tenantId: number,
    data: UpdateCategoryDTO
  ) {
    // Verify ownership
    const category = await prisma.propertyCategories.findFirst({
      where: {
        id: categoryId,
        tenantId,
      },
    });

    if (!category) {
      throw new AppError("Category not found", 404);
    }

    // Check name uniqueness if name is being updated
    if (data.name && data.name !== category.name) {
      const existingCategory = await prisma.propertyCategories.findFirst({
        where: {
          tenantId,
          name: {
            equals: data.name,
            mode: "insensitive",
          },
          id: {
            not: categoryId,
          },
        },
      });

      if (existingCategory) {
        throw new AppError("Category with this name already exists", 400);
      }
    }

    const updatedCategory = await prisma.propertyCategories.update({
      where: { id: categoryId },
      data: {
        name: data.name || category.name,
        description: data.description || category.description,
      },
    });

    return updatedCategory;
  }

  async deleteCategory(categoryId: number, tenantId: number) {
    // Verify ownership
    const category = await prisma.propertyCategories.findFirst({
      where: {
        id: categoryId,
        tenantId,
      },
      include: {
        _count: {
          select: {
            properties: true,
          },
        },
      },
    });

    if (!category) {
      throw new AppError("Category not found", 404);
    }

    // Check if category has properties
    if (category._count.properties > 0) {
      throw new AppError(
        "Cannot delete category with existing properties. Please delete or reassign the properties first.",
        400
      );
    }

    await prisma.propertyCategories.delete({
      where: { id: categoryId },
    });

    return { message: "Category deleted successfully" };
  }
}
