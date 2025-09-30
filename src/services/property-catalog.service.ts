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

    const where: Prisma.PropertiesWhereInput = {
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

    // Get properties with rooms
    let properties = await prisma.properties.findMany({
      where,
      include: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        rooms: {
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
            _count: {
              select: {
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
                                {
                                  checkOut: { gte: new Date(filter.checkOut) },
                                },
                              ],
                            },
                            {
                              AND: [
                                { checkIn: { gte: new Date(filter.checkIn) } },
                                {
                                  checkOut: { lte: new Date(filter.checkOut) },
                                },
                              ],
                            },
                          ],
                          status: {
                            notIn: ["CANCELLED"],
                          },
                        },
                      }
                    : undefined,
              },
            },
          },
        },
        reviews: {
          select: {
            rating: true,
          },
        },
      },
      skip,
      take: limit,
    });

    // Filter and calculate prices
    const propertiesWithPrices = properties
      .map((property) => {
        // Filter rooms based on availability and guest count
        let availableRooms = property.rooms.filter((room) => {
          // Check guest capacity
          if (filter.guests && room.maxGuests < filter.guests) {
            return false;
          }

          // Check if room is reserved
          if (
            filter.checkIn &&
            filter.checkOut &&
            room._count.reservations > 0
          ) {
            return false;
          }

          // Check availability settings
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

        // Calculate lowest price
        const lowestPrice = Math.min(
          ...availableRooms.map((room) => {
            let price = Number(room.basePrice);

            // Apply peak season pricing if dates provided
            if (filter.checkIn && filter.checkOut) {
              const checkInDate = new Date(filter.checkIn);
              const checkOutDate = new Date(filter.checkOut);

              room.peakSeasons.forEach((season) => {
                if (
                  season.startDate <= checkOutDate &&
                  season.endDate >= checkInDate
                ) {
                  if (season.priceIncreaseType === "percentage") {
                    price += price * (Number(season.value) / 100);
                  } else {
                    price += Number(season.value);
                  }
                }
              });
            }

            return price;
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

    // Sort by price if requested
    if (filter.sortBy === "price") {
      propertiesWithPrices.sort((a, b) => {
        if (filter.sortOrder === "desc") {
          return b!.lowestPrice - a!.lowestPrice;
        }
        return a!.lowestPrice - b!.lowestPrice;
      });
    } else if (filter.sortBy === "name") {
      propertiesWithPrices.sort((a, b) => {
        if (filter.sortOrder === "desc") {
          return b!.name.localeCompare(a!.name);
        }
        return a!.name.localeCompare(b!.name);
      });
    }

    const total = propertiesWithPrices.length;

    return {
      properties: propertiesWithPrices,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
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
            _count: {
              select: {
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
                      }
                    : undefined,
              },
            },
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
      let price = Number(room.basePrice);
      let isAvailable = true;

      // Check if reserved
      if (checkIn && checkOut && room._count.reservations > 0) {
        isAvailable = false;
      }

      // Apply peak season pricing
      if (checkIn && checkOut) {
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        room.peakSeasons.forEach((season) => {
          if (
            season.startDate <= checkOutDate &&
            season.endDate >= checkInDate
          ) {
            if (season.priceIncreaseType === "percentage") {
              price += price * (Number(season.value) / 100);
            } else {
              price += Number(season.value);
            }
          }
        });
      }

      return {
        ...room,
        currentPrice: price,
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

      // Apply peak season pricing
      room.peakSeasons.forEach((season) => {
        if (date >= season.startDate && date <= season.endDate) {
          if (season.priceIncreaseType === "percentage") {
            price += price * (Number(season.value) / 100);
          } else {
            price += Number(season.value);
          }
        }
      });

      calendar.push({
        date: date.toISOString().split("T")[0],
        price,
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
}
