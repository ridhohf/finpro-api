import prisma from "../utils/prisma";
import { AppError } from "../utils/app.error";
import { CloudinaryUtil } from "../utils/cloudinary.util";
import { GeocodingUtil } from "../utils/geocoding.util";
import { Prisma } from "../generated/prisma";

interface CreatePropertyDTO {
  categoryId: number;
  name: string;
  description: string;
  address: string;
  city: string;
}

interface UpdatePropertyDTO {
  categoryId?: number;
  name?: string;
  description?: string;
  address?: string;
  city?: string;
}

interface PropertyFilter {
  page?: number;
  limit?: number;
  search?: string;
  categoryId?: number;
  sortBy?: "name" | "createdAt";
  sortOrder?: "asc" | "desc";
}

export class PropertyService {
  async getProperties(tenantId: number, filter: PropertyFilter) {
    const page = filter.page || 1;
    const limit = filter.limit || 10;
    const skip = (page - 1) * limit;

    const where: Prisma.PropertiesWhereInput = {
      tenantId,
      ...(filter.search && {
        name: {
          contains: filter.search,
          mode: "insensitive" as Prisma.QueryMode,
        },
      }),
      ...(filter.categoryId && {
        categoryId: filter.categoryId,
      }),
    };

    const orderBy: Prisma.PropertiesOrderByWithRelationInput = {
      [filter.sortBy || "createdAt"]: filter.sortOrder || "desc",
    };

    const [properties, total] = await Promise.all([
      prisma.properties.findMany({
        where,
        include: {
          category: {
            select: {
              id: true,
              name: true,
            },
          },
          _count: {
            select: {
              rooms: true,
              reviews: true,
            },
          },
        },
        orderBy,
        skip,
        take: limit,
      }),
      prisma.properties.count({ where }),
    ]);

    return {
      properties,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getPropertyById(propertyId: number, tenantId: number) {
    const property = await prisma.properties.findFirst({
      where: {
        id: propertyId,
        tenantId,
      },
      include: {
        category: true,
        rooms: {
          orderBy: { createdAt: "desc" },
        },
        _count: {
          select: {
            reviews: true,
            reservations: true,
          },
        },
      },
    });

    if (!property) {
      throw new AppError("Property not found", 404);
    }

    return property;
  }

  async createProperty(
    tenantId: number,
    data: CreatePropertyDTO,
    images: Express.Multer.File[]
  ) {
    // Verify category belongs to tenant
    const category = await prisma.propertyCategories.findFirst({
      where: {
        id: data.categoryId,
        tenantId,
      },
    });

    if (!category) {
      throw new AppError("Category not found", 404);
    }

    // Upload images to Cloudinary
    const imageUrls: string[] = [];
    for (const image of images) {
      const url = await CloudinaryUtil.uploadImage(image, "properties");
      imageUrls.push(url);
    }

    // Get coordinates from address
    let lat: number | null = null;
    let lng: number | null = null;

    try {
      const geocoding = await GeocodingUtil.getCoordinates(
        data.address,
        data.city
      );
      lat = geocoding.lat;
      lng = geocoding.lng;
    } catch (error) {
      // Continue without coordinates if geocoding fails
      console.warn("Geocoding failed:", error);
    }

    // Create property
    const property = await prisma.properties.create({
      data: {
        tenantId,
        categoryId: data.categoryId,
        name: data.name,
        description: data.description,
        picture: imageUrls,
        address: data.address,
        city: data.city,
        lat: lat ? new Prisma.Decimal(lat) : null,
        lng: lng ? new Prisma.Decimal(lng) : null,
      },
      include: {
        category: true,
      },
    });

    return property;
  }

  async updateProperty(
    propertyId: number,
    tenantId: number,
    data: UpdatePropertyDTO,
    images?: Express.Multer.File[]
  ) {
    // Verify ownership
    const property = await prisma.properties.findFirst({
      where: {
        id: propertyId,
        tenantId,
      },
    });

    if (!property) {
      throw new AppError("Property not found", 404);
    }

    // Verify category if provided
    if (data.categoryId) {
      const category = await prisma.propertyCategories.findFirst({
        where: {
          id: data.categoryId,
          tenantId,
        },
      });

      if (!category) {
        throw new AppError("Category not found", 404);
      }
    }

    // Upload new images if provided
    let imageUrls = property.picture as string[];
    if (images && images.length > 0) {
      const newImageUrls: string[] = [];
      for (const image of images) {
        const url = await CloudinaryUtil.uploadImage(image, "properties");
        newImageUrls.push(url);
      }
      imageUrls = [...imageUrls, ...newImageUrls];
    }

    // Update coordinates if address changed
    let lat = property.lat;
    let lng = property.lng;

    if (
      (data.address && data.address !== property.address) ||
      (data.city && data.city !== property.city)
    ) {
      try {
        const geocoding = await GeocodingUtil.getCoordinates(
          data.address || property.address,
          data.city || property.city
        );
        lat = new Prisma.Decimal(geocoding.lat);
        lng = new Prisma.Decimal(geocoding.lng);
      } catch (error) {
        console.warn("Geocoding failed:", error);
      }
    }

    // Update property
    const updatedProperty = await prisma.properties.update({
      where: { id: propertyId },
      data: {
        categoryId: data.categoryId || property.categoryId,
        name: data.name || property.name,
        description: data.description || property.description,
        picture: imageUrls,
        address: data.address || property.address,
        city: data.city || property.city,
        lat,
        lng,
      },
      include: {
        category: true,
      },
    });

    return updatedProperty;
  }

  async deleteProperty(propertyId: number, tenantId: number) {
    // Verify ownership
    const property = await prisma.properties.findFirst({
      where: {
        id: propertyId,
        tenantId,
      },
      include: {
        _count: {
          select: {
            reservations: true,
          },
        },
      },
    });

    if (!property) {
      throw new AppError("Property not found", 404);
    }

    // Check for active reservations
    if (property._count.reservations > 0) {
      throw new AppError(
        "Cannot delete property with existing reservations",
        400
      );
    }

    await prisma.properties.delete({
      where: { id: propertyId },
    });

    return { message: "Property deleted successfully" };
  }

  async getCities() {
    const cities = await prisma.properties.findMany({
      select: {
        city: true,
      },
      distinct: ["city"],
      orderBy: {
        city: "asc",
      },
    });

    return cities.map((c) => c.city);
  }
}
