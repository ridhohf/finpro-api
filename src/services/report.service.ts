import { PrismaClient } from '../generated/prisma';

export class ReportService {
  private prisma = new PrismaClient();

  async getSalesReport(
    tenantId: number,
    filters: {
      startDate?: string;
      endDate?: string;
      sortBy?: string;
      propertyId?: number;
    }
  ) {
    const whereClause: any = {
      property: { tenantId: tenantId },
      status: 'CONFIRMED',
    };

    if (filters.startDate && filters.endDate) {
      whereClause.createdAt = {
        gte: new Date(filters.startDate),
        lte: new Date(filters.endDate),
      };
    }

    if (filters.propertyId) {
      whereClause.propertyId = filters.propertyId;
    }

    const transactions = await this.prisma.reservations.findMany({
      where: whereClause,
      include: {
        property: { select: { name: true } },
        room: { select: { name: true } },
        user: { select: { name: true, email: true } },
      },
      orderBy:
        filters.sortBy === 'price'
          ? { totalPrice: 'desc' }
          : { createdAt: 'desc' },
    });

    const totalRevenue = transactions.reduce(
      (sum: number, t: any) => sum + parseFloat(t.totalPrice.toString()),
      0
    );

    const groupedByProperty = transactions.reduce((acc: any, t: any) => {
      const propName = t.property.name;
      if (!acc[propName]) {
        acc[propName] = { count: 0, revenue: 0 };
      }
      acc[propName].count += 1;
      acc[propName].revenue += parseFloat(t.totalPrice.toString());
      return acc;
    }, {});

    await this.prisma.$disconnect();

    return {
      summary: {
        totalTransactions: transactions.length,
        totalRevenue: totalRevenue,
        averageBookingValue:
          transactions.length > 0 ? totalRevenue / transactions.length : 0,
      },
      byProperty: Object.entries(groupedByProperty).map(
        ([name, data]: [string, any]) => ({
          propertyName: name,
          bookings: data.count,
          revenue: data.revenue,
        })
      ),
      transactions: transactions.map((t: any) => ({
        id: t.id,
        bookingDate: t.createdAt,
        checkIn: t.checkIn,
        checkOut: t.checkOut,
        property: t.property.name,
        room: t.room.name,
        guest: t.user.name,
        duration: t.duration,
        totalPrice: parseFloat(t.totalPrice.toString()),
      })),
    };
  }

  async getAvailabilityReport(tenantId: number, month?: number, year?: number) {
    const properties = await this.prisma.properties.findMany({
      where: { tenantId: tenantId },
      include: {
        rooms: {
          include: {
            reservations: {
              where: {
                status: { in: ['CONFIRMED', 'PENDING_CONFIRMATION'] },
              },
            },
          },
        },
      },
    });

    const targetMonth = month || new Date().getMonth() + 1;
    const targetYear = year || new Date().getFullYear();
    const daysInMonth = new Date(targetYear, targetMonth, 0).getDate();

    const availabilityCalendar = properties.map((property: any) => {
      const roomAvailability = property.rooms.map((room: any) => {
        const calendar: any = {};

        for (let day = 1; day <= daysInMonth; day++) {
          const currentDate = new Date(targetYear, targetMonth - 1, day);
          const isBooked = room.reservations.some((reservation: any) => {
            const checkIn = new Date(reservation.checkIn);
            const checkOut = new Date(reservation.checkOut);
            return currentDate >= checkIn && currentDate < checkOut;
          });

          calendar[day] = {
            date: currentDate.toISOString().split('T')[0],
            status: isBooked ? 'BOOKED' : 'AVAILABLE',
          };
        }

        return {
          roomId: room.id,
          roomName: room.name,
          calendar: calendar,
        };
      });

      return {
        propertyId: property.id,
        propertyName: property.name,
        rooms: roomAvailability,
      };
    });

    await this.prisma.$disconnect();

    return {
      month: targetMonth,
      year: targetYear,
      properties: availabilityCalendar,
    };
  }
}
