// src/utils/peak-season-query-builder.ts
import { Decimal } from "../generated/prisma/runtime/library";

interface GetPeakSeasonsParams {
  roomId: number;
  search?: string;
  year?: number;
  sortBy: string;
  sortOrder: "asc" | "desc";
}

interface UpdatePeakSeasonData {
  name?: string;
  startDate?: Date;
  endDate?: Date;
  priceIncreaseType?: "PERCENTAGE" | "FIXED";
  value?: number;
}

export class PeakSeasonQueryBuilder {
  static buildQuery(params: GetPeakSeasonsParams) {
    const { roomId, search, year, sortBy, sortOrder } = params;

    const whereClause: any = { roomId };

    if (search) {
      whereClause.name = { contains: search, mode: "insensitive" };
    }

    if (year) {
      whereClause.AND = [
        { startDate: { gte: new Date(`${year}-01-01`) } },
        { endDate: { lte: new Date(`${year}-12-31`) } },
      ];
    }

    const orderByClause: any = {};
    if (
      ["name", "startDate", "endDate", "value", "createdAt"].includes(sortBy)
    ) {
      orderByClause[sortBy] = sortOrder;
    } else {
      orderByClause.startDate = "asc";
    }

    return { whereClause, orderByClause };
  }

  static buildUpdateData(data: UpdatePeakSeasonData) {
    const updateData: any = {};

    if (data.name) updateData.name = data.name.trim();
    if (data.startDate) updateData.startDate = data.startDate;
    if (data.endDate) updateData.endDate = data.endDate;
    if (data.priceIncreaseType)
      updateData.priceIncreaseType = data.priceIncreaseType;
    if (data.value !== undefined) updateData.value = new Decimal(data.value);

    return updateData;
  }
}
