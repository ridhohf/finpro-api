import prisma from "../utils/prisma";

export class DashboardService {
  async getTenantDashboard(tenantId: number) {
    // Get statistics
    const [
      propertiesCount,
      categoriesCount,
      roomsCount,
      reviewsStats,
      propertiesByCategory,
      recentProperties,
    ] = await Promise.all([
      // Total properties
      prisma.properties.count({
        where: { tenantId },
      }),

      // Total categories
      prisma.propertyCategories.count({
        where: { tenantId },
      }),

      // Total rooms across all properties
      prisma.rooms.count({
        where: {
          property: {
            tenantId,
          },
        },
      }),

      // Reviews statistics
      prisma.reviews.aggregate({
        where: {
          property: {
            tenantId,
          },
        },
        _avg: {
          rating: true,
        },
        _count: {
          id: true,
        },
      }),

      // Properties grouped by category
      prisma.properties.groupBy({
        by: ["categoryId"],
        where: { tenantId },
        _count: {
          id: true,
        },
      }),

      // Recent properties
      prisma.properties.findMany({
        where: { tenantId },
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
        orderBy: {
          createdAt: "desc",
        },
        take: 5,
      }),
    ]);

    // Get category names for chart
    const categoryIds = propertiesByCategory.map((p) => p.categoryId);
    const categories = await prisma.propertyCategories.findMany({
      where: {
        id: { in: categoryIds },
        tenantId,
      },
      select: {
        id: true,
        name: true,
      },
    });

    // Map category data with names
    const propertiesPerCategory = propertiesByCategory.map((item) => {
      const category = categories.find((c) => c.id === item.categoryId);
      return {
        categoryId: item.categoryId,
        categoryName: category?.name || "Unknown",
        count: item._count.id,
      };
    });

    // Calculate average rating
    const averageRating = reviewsStats._avg.rating
      ? Math.round(Number(reviewsStats._avg.rating) * 10) / 10
      : 0;

    return {
      statistics: {
        totalProperties: propertiesCount,
        totalCategories: categoriesCount,
        totalRooms: roomsCount,
        totalReviews: reviewsStats._count.id,
        averageRating,
      },
      charts: {
        propertiesPerCategory,
      },
      recentProperties,
    };
  }
}
