// src/services/property.service.ts
import { PrismaClient } from "../generated/prisma";
import { AppError } from "../utils/app.error";
import logger from "../utils/logger";
import CloudinaryService from "./cloudinary.service";
import GeolocationService from "./geolocation.service";
import { PropertyQueryBuilder } from "../utils/property-query-builder";

const prisma = new PrismaClient();

interface GetPropertiesParams {
  tenantId?: number;
  page: number;
  limit: number;
  search?: string;
  categoryId?: number;
  city?: string;
  sortBy: string;
  sortOrder: "asc" | "desc";
}

interface GetPublicPropertiesParams {
  city: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  page: number;
  limit: number;
  categoryId?: number;
  sortBy: string;
  sortOrder: "asc" | "desc";
  search?: string;
}

interface CreatePropertyData {
  tenantId: number;
  categoryId: number;
  name: string;
  description: string;
  address: string;
  city: string;
}

class PropertyService {
  async getProperties(params: GetPropertiesParams) {
    const { page, limit } = params;
    const offset = (page - 1) * limit;

    const { whereClause, orderByClause } =
      PropertyQueryBuilder.buildQuery(params);

    const [properties, total] = await Promise.all([
      prisma.properties.findMany({
        where: whereClause,
        orderBy: orderByClause,
        skip: offset,
        take: limit,
        include: PropertyQueryBuilder.getPropertyIncludes(),
      }),
      prisma.properties.count({ where: whereClause }),
    ]);

    return PropertyQueryBuilder.formatResponse(properties, page, limit, total);
  }

  async getPropertyById(id: number, tenantId?: number) {
    const whereClause: any = { id };
    if (tenantId) whereClause.tenantId = tenantId;

    return await prisma.properties.findFirst({
      where: whereClause,
      include: PropertyQueryBuilder.getDetailIncludes() as any,
    });
  }

  async createProperty(data: CreatePropertyData, file: Express.Multer.File) {
    const { tenantId, categoryId, name, description, address, city } = data;

    await this.validateCategory(categoryId, tenantId);

    const imageUrl = await CloudinaryService.uploadImage(file);
    const coordinates = await GeolocationService.getCoordinates(city, address);

    const propertyData = PropertyQueryBuilder.buildCreateData(
      data,
      imageUrl,
      coordinates
    );

    const property = await prisma.properties.create({
      data: propertyData,
      include: PropertyQueryBuilder.getPropertyIncludes(),
    });

    logger.info(`Property created: ${name} by tenant ${tenantId}`);
    return property;
  }

  async updateProperty(
    id: number,
    tenantId: number,
    data: any,
    file?: Express.Multer.File
  ) {
    const existingProperty = await this.findPropertyByTenant(id, tenantId);

    if (data.categoryId) {
      await this.validateCategory(data.categoryId, tenantId);
    }

    const updateData = await PropertyQueryBuilder.buildUpdateDataWithFiles(
      data,
      existingProperty,
      file
    );

    const property = await prisma.properties.update({
      where: { id },
      data: updateData,
      include: PropertyQueryBuilder.getPropertyIncludes(),
    });

    logger.info(`Property updated: ${property.name} by tenant ${tenantId}`);
    return property;
  }

  async deleteProperty(id: number, tenantId: number) {
    const property = await prisma.properties.findFirst({
      where: { id, tenantId },
      include: { _count: { select: { rooms: true, reservations: true } } },
    });

    if (!property) {
      throw new AppError("Property not found", 404);
    }

    if (property._count.reservations > 0) {
      throw new AppError(
        "Cannot delete property with existing reservations",
        400
      );
    }

    await prisma.properties.delete({ where: { id } });
    logger.info(`Property deleted: ${property.name} by tenant ${tenantId}`);
  }

  async getPublicProperties(params: GetPublicPropertiesParams) {
    const { page, limit } = params;
    const offset = (page - 1) * limit;

    const whereClause = PropertyQueryBuilder.buildPublicSearchQuery(params);

    const [properties, total] = await Promise.all([
      prisma.properties.findMany({
        where: whereClause,
        skip: offset,
        take: limit,
        include: PropertyQueryBuilder.getPublicIncludes(params.guests) as any,
      }),
      prisma.properties.count({ where: whereClause }),
    ]);

    return PropertyQueryBuilder.formatResponse(properties, page, limit, total);
  }

  async getPublicPropertyDetail(id: number) {
    return await this.getPropertyById(id);
  }

  private async findPropertyByTenant(id: number, tenantId: number) {
    const property = await prisma.properties.findFirst({
      where: { id, tenantId },
    });

    if (!property) {
      throw new AppError("Property not found", 404);
    }

    return property;
  }

  private async validateCategory(categoryId: number, tenantId: number) {
    const category = await prisma.propertyCategories.findFirst({
      where: { id: categoryId, tenantId },
    });

    if (!category) {
      throw new AppError(
        "Category not found or does not belong to tenant",
        404
      );
    }

    return category;
  }
}

export default new PropertyService();
