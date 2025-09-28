// src/utils/property-query-builder.ts
import CloudinaryService from "../services/cloudinary.service";
import GeolocationService from "../services/geolocation.service";

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

export class PropertyQueryBuilder {
  static buildQuery(params: GetPropertiesParams) {
    const { tenantId, search, categoryId, city, sortBy, sortOrder } = params;

    const whereClause: any = {};
    if (tenantId) whereClause.tenantId = tenantId;
    if (categoryId) whereClause.categoryId = categoryId;
    if (city) whereClause.city = { contains: city, mode: "insensitive" };

    if (search) {
      whereClause.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { address: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    const orderByClause: any = {};
    if (["name", "city", "createdAt"].includes(sortBy)) {
      orderByClause[sortBy] = sortOrder;
    } else {
      orderByClause.name = "asc";
    }

    return { whereClause, orderByClause };
  }

  static buildPublicSearchQuery(params: GetPublicPropertiesParams) {
    const { city, checkIn, checkOut, guests, categoryId, search } = params;

    const whereClause: any = {
      city: { contains: city, mode: "insensitive" },
      rooms: {
        some: {
          maxGuests: { gte: guests },
          roomAvailabilities: {
            every: {
              OR: [
                { date: { lt: checkIn } },
                { date: { gte: checkOut } },
                { isAvailable: true },
              ],
            },
          },
        },
      },
    };

    if (categoryId) whereClause.categoryId = categoryId;

    if (search) {
      whereClause.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { address: { contains: search, mode: "insensitive" } },
      ];
    }

    return whereClause;
  }

  static buildCreateData(
    data: CreatePropertyData,
    imageUrl: string,
    coordinates: any
  ) {
    return {
      tenantId: data.tenantId,
      categoryId: data.categoryId,
      name: data.name.trim(),
      description: data.description.trim(),
      address: data.address.trim(),
      city: data.city.trim(),
      picture: imageUrl,
      lat: coordinates?.lat || null,
      lng: coordinates?.lng || null,
    };
  }

  static async buildUpdateDataWithFiles(
    data: any,
    existingProperty: any,
    file?: Express.Multer.File
  ) {
    const updateData: any = {};

    if (data.name) updateData.name = data.name.trim();
    if (data.description) updateData.description = data.description.trim();
    if (data.address) updateData.address = data.address.trim();
    if (data.city) updateData.city = data.city.trim();
    if (data.categoryId) updateData.categoryId = data.categoryId;

    if (file) {
      updateData.picture = await CloudinaryService.uploadImage(file);
    }

    if (data.address || data.city) {
      const coordinates = await GeolocationService.getCoordinates(
        data.city || existingProperty.city,
        data.address || existingProperty.address
      );
      if (coordinates) {
        updateData.lat = coordinates.lat;
        updateData.lng = coordinates.lng;
      }
    }

    return updateData;
  }

  static getPropertyIncludes() {
    return {
      category: true,
      _count: { select: { rooms: true, reviews: true } },
    };
  }

  static getDetailIncludes() {
    return {
      category: true,
      rooms: {
        include: {
          roomAvailabilities: {
            where: { date: { gte: new Date() } },
            orderBy: { date: "asc" as const },
          },
          peakSeasons: true,
        },
      },
      reviews: {
        include: { user: { select: { name: true, avatar: true } } },
        orderBy: { createdAt: "desc" as const },
      },
      _count: { select: { reviews: true } },
    };
  }

  static getPublicIncludes(guests: number) {
    return {
      category: true,
      rooms: {
        where: { maxGuests: { gte: guests } },
        orderBy: { basePrice: "asc" as const },
        take: 1,
      },
    };
  }

  static formatResponse(
    properties: any[],
    page: number,
    limit: number,
    total: number
  ) {
    return {
      properties,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    };
  }
}
