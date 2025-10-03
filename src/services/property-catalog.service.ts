import prisma from "../utils/prisma";
import { Prisma } from "../generated/prisma";

interface PropertySearchFilter {
  city?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  categoryId?: number;
  search?: string;
  sortBy?: "name" | "price";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

export class PropertyCatalogService {
  async searchProperties(filter: PropertySearchFilter) {
    const page = filter.page || 1;
    const limit = filter.limit || 10;
    const skip = (page - 1) * limit;

    // Build base where clause for properties
    const propertyWhere: Prisma.PropertiesWhereInput = {
      ...(filter.city && {
        city: {
          equals: filter.city,
          mode: "insensitive" as Prisma.QueryMode,
        },
      }),
      ...(filter.categoryId && {
        categoryId: filter.categoryId,
      }),
      ...(filter.search && {
        OR: [
          {
            name: {
              contains: filter.search,
              mode: "insensitive" as Prisma.QueryMode,
            },
          },
          {
            description: {
              contains: filter.search,
              mode: "insensitive" as Prisma.QueryMode,
            },
          },
        ],
      }),
    };

    // First, get total count of properties matching base criteria
    const totalProperties = await prisma.properties.count({
      where: propertyWhere,
    });

    // Get properties with all necessary relations
    const properties = await prisma.properties.findMany({
      where: propertyWhere,
      include: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        rooms: {
          where: {
            // Filter rooms by guest capacity at query level
            ...(filter.guests && {
              maxGuests: {
                gte: filter.guests,
              },
            }),
          },
          include: {
            peakSeasons: true,
            roomAvailabilities:
              filter.checkIn && filter.checkOut
                ? {
                    where: {
                      date: {
                        gte: new Date(filter.checkIn),
                        lte: new Date(filter.checkOut),
                      },
                    },
                  }
                : false,
            reservations:
              filter.checkIn && filter.checkOut
                ? {
                    where: {
                      OR: [
                        {
                          AND: [
                            { checkIn: { lte: new Date(filter.checkIn) } },
                            { checkOut: { gte: new Date(filter.checkIn) } },
                          ],
                        },
                        {
                          AND: [
                            { checkIn: { lte: new Date(filter.checkOut) } },
                            { checkOut: { gte: new Date(filter.checkOut) } },
                          ],
                        },
                        {
                          AND: [
                            { checkIn: { gte: new Date(filter.checkIn) } },
                            { checkOut: { lte: new Date(filter.checkOut) } },
                          ],
                        },
                      ],
                      status: {
                        notIn: ["CANCELLED"],
                      },
                    },
                    select: {
                      id: true,
                    },
                  }
                : false,
          },
        },
        reviews: {
          select: {
            rating: true,
          },
        },
      },
      orderBy:
        filter.sortBy === "name"
          ? { name: filter.sortOrder || "asc" }
          : { id: "asc" }, // Default ordering for consistent results
    });

    // Process properties and calculate prices
    const propertiesWithPrices = properties
      .map((property) => {
        // Filter available rooms
        const availableRooms = property.rooms.filter((room) => {
          // Check if room is reserved during the date range
          if (filter.checkIn && filter.checkOut && room.reservations) {
            if (room.reservations.length > 0) {
              return false;
            }
          }

          // Check room availability settings (dates marked as unavailable)
          if (filter.checkIn && filter.checkOut && room.roomAvailabilities) {
            const unavailableDates = room.roomAvailabilities.filter(
              (avail: any) => !avail.isAvailable
            );
            if (unavailableDates.length > 0) {
              return false;
            }
          }

          return true;
        });

        // Skip property if no available rooms
        if (availableRooms.length === 0) {
          return null;
        }

        // Calculate lowest price among available rooms
        const lowestPrice = Math.min(
          ...availableRooms.map((room) => {
            return this.calculateRoomPrice(
              room,
              filter.checkIn,
              filter.checkOut
            );
          })
        );

        // Calculate average rating
        const avgRating =
          property.reviews.length > 0
            ? property.reviews.reduce((sum, r) => sum + r.rating, 0) /
              property.reviews.length
            : 0;

        return {
          id: property.id,
          name: property.name,
          description: property.description,
          picture: property.picture,
          address: property.address,
          city: property.city,
          lat: property.lat,
          lng: property.lng,
          category: property.category,
          lowestPrice,
          availableRooms: availableRooms.length,
          totalReviews: property.reviews.length,
          averageRating: Math.round(avgRating * 10) / 10,
        };
      })
      .filter((p) => p !== null);

    // Sort by price if requested (must be done after price calculation)
    if (filter.sortBy === "price") {
      propertiesWithPrices.sort((a, b) => {
        if (filter.sortOrder === "desc") {
          return b!.lowestPrice - a!.lowestPrice;
        }
        return a!.lowestPrice - b!.lowestPrice;
      });
    }

    // Apply pagination after filtering and sorting
    const paginatedProperties = propertiesWithPrices.slice(skip, skip + limit);

    return {
      properties: paginatedProperties,
      pagination: {
        page,
        limit,
        total: propertiesWithPrices.length,
        totalPages: Math.ceil(propertiesWithPrices.length / limit),
        totalPropertiesBeforeFilter: totalProperties,
      },
      filters: {
        city: filter.city,
        checkIn: filter.checkIn,
        checkOut: filter.checkOut,
        guests: filter.guests,
        categoryId: filter.categoryId,
      },
    };
  }

  async getPropertyDetail(
    propertyId: number,
    checkIn?: string,
    checkOut?: string
  ) {
    const property = await prisma.properties.findUnique({
      where: { id: propertyId },
      include: {
        category: true,
        tenant: {
          select: {
            id: true,
            name: true,
            tenantProfile: true,
          },
        },
        rooms: {
          include: {
            peakSeasons: true,
            reservations:
              checkIn && checkOut
                ? {
                    where: {
                      OR: [
                        {
                          AND: [
                            { checkIn: { lte: new Date(checkIn) } },
                            { checkOut: { gte: new Date(checkIn) } },
                          ],
                        },
                        {
                          AND: [
                            { checkIn: { lte: new Date(checkOut) } },
                            { checkOut: { gte: new Date(checkOut) } },
                          ],
                        },
                        {
                          AND: [
                            { checkIn: { gte: new Date(checkIn) } },
                            { checkOut: { lte: new Date(checkOut) } },
                          ],
                        },
                      ],
                      status: {
                        notIn: ["CANCELLED"],
                      },
                    },
                    select: {
                      id: true,
                    },
                  }
                : false,
            roomAvailabilities:
              checkIn && checkOut
                ? {
                    where: {
                      date: {
                        gte: new Date(checkIn),
                        lte: new Date(checkOut),
                      },
                    },
                  }
                : false,
          },
        },
        reviews: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!property) {
      return null;
    }

    // Calculate room prices and availability
    const roomsWithPrices = property.rooms.map((room) => {
      let isAvailable = true;

      // Check if reserved
      if (
        checkIn &&
        checkOut &&
        room.reservations &&
        room.reservations.length > 0
      ) {
        isAvailable = false;
      }

      // Check room availability settings
      if (checkIn && checkOut && room.roomAvailabilities) {
        const unavailableDates = room.roomAvailabilities.filter(
          (avail: any) => !avail.isAvailable
        );
        if (unavailableDates.length > 0) {
          isAvailable = false;
        }
      }

      const currentPrice = this.calculateRoomPrice(room, checkIn, checkOut);

      return {
        ...room,
        currentPrice,
        isAvailable,
      };
    });

    // Calculate average rating
    const avgRating =
      property.reviews.length > 0
        ? property.reviews.reduce((sum, r) => sum + r.rating, 0) /
          property.reviews.length
        : 0;

    return {
      ...property,
      rooms: roomsWithPrices,
      averageRating: Math.round(avgRating * 10) / 10,
      totalReviews: property.reviews.length,
    };
  }

  async getRoomPriceCalendar(roomId: number, month: number, year: number) {
    const room = await prisma.rooms.findUnique({
      where: { id: roomId },
      include: {
        peakSeasons: true,
        roomAvailabilities: {
          where: {
            date: {
              gte: new Date(year, month - 1, 1),
              lte: new Date(year, month, 0),
            },
          },
        },
        reservations: {
          where: {
            checkIn: {
              lte: new Date(year, month, 0),
            },
            checkOut: {
              gte: new Date(year, month - 1, 1),
            },
            status: {
              notIn: ["CANCELLED"],
            },
          },
        },
      },
    });

    if (!room) {
      return null;
    }

    const daysInMonth = new Date(year, month, 0).getDate();
    const calendar = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month - 1, day);
      let price = Number(room.basePrice);
      let isAvailable = true;

      // Check room availability settings
      const availability = room.roomAvailabilities.find(
        (a) => a.date.getTime() === date.getTime()
      );
      if (availability) {
        isAvailable = availability.isAvailable;
        if (availability.priceOverride) {
          price = Number(availability.priceOverride);
        }
      }

      // Check reservations
      const isReserved = room.reservations.some(
        (res) => date >= res.checkIn && date <= res.checkOut
      );
      if (isReserved) {
        isAvailable = false;
      }

      // Apply peak season pricing (only if no price override)
      if (!availability?.priceOverride) {
        room.peakSeasons.forEach((season) => {
          if (date >= season.startDate && date <= season.endDate) {
            if (season.priceIncreaseType === "percentage") {
              price += price * (Number(season.value) / 100);
            } else {
              price += Number(season.value);
            }
          }
        });
      }

      calendar.push({
        date: date.toISOString().split("T")[0],
        price: Math.round(price * 100) / 100, // Round to 2 decimal places
        isAvailable,
      });
    }

    return {
      roomId: room.id,
      roomName: room.name,
      basePrice: Number(room.basePrice),
      calendar,
    };
  }

  // Helper method to calculate room price with peak seasons
  private calculateRoomPrice(
    room: any,
    checkIn?: string,
    checkOut?: string
  ): number {
    let price = Number(room.basePrice);

    // Apply peak season pricing if dates provided
    if (checkIn && checkOut && room.peakSeasons) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);

      room.peakSeasons.forEach((season: any) => {
        if (season.startDate <= checkOutDate && season.endDate >= checkInDate) {
          if (season.priceIncreaseType === "percentage") {
            price += price * (Number(season.value) / 100);
          } else {
            price += Number(season.value);
          }
        }
      });
    }

    return Math.round(price * 100) / 100; // Round to 2 decimal places
  }
}
