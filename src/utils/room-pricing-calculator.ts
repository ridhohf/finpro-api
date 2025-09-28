// src/utils/room-pricing-calculator.ts
import { Decimal } from "../generated/prisma/runtime/library";

interface Room {
  basePrice: Decimal;
  peakSeasons: Array<{
    name: string;
    startDate: Date;
    endDate: Date;
    priceIncreaseType: string;
    value: Decimal;
  }>;
  roomAvailabilities: Array<{
    date: Date;
    isAvailable: boolean;
    priceOverride: Decimal | null;
  }>;
}

export class RoomPricingCalculator {
  static calculate(room: Room, startDate: Date, endDate: Date) {
    const currentDate = new Date(startDate);
    const pricing = [];

    while (currentDate <= endDate) {
      const dateStr = currentDate.toISOString().split("T")[0];
      let price = room.basePrice;

      // Check for price override
      const availability = room.roomAvailabilities.find(
        (avail) => avail.date.toISOString().split("T")[0] === dateStr
      );

      if (availability?.priceOverride) {
        price = availability.priceOverride;
      } else {
        // Check for peak season pricing
        const peakSeason = room.peakSeasons.find(
          (season) =>
            new Date(season.startDate) <= currentDate &&
            new Date(season.endDate) >= currentDate
        );

        if (peakSeason) {
          if (peakSeason.priceIncreaseType === "PERCENTAGE") {
            price = room.basePrice.mul(
              new Decimal(1).add(peakSeason.value.div(100))
            );
          } else if (peakSeason.priceIncreaseType === "FIXED") {
            price = room.basePrice.add(peakSeason.value);
          }
        }
      }

      pricing.push({
        date: dateStr,
        price: price.toNumber(),
        isAvailable: availability?.isAvailable ?? true,
        peakSeason:
          room.peakSeasons.find(
            (season) =>
              new Date(season.startDate) <= currentDate &&
              new Date(season.endDate) >= currentDate
          )?.name || null,
      });

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return pricing;
  }
}
