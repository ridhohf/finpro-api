import axios from "axios";
import { AppError } from "./app.error";

interface GeocodingResult {
  lat: number;
  lng: number;
  formattedAddress: string;
}

export class GeocodingUtil {
  private static apiKey = process.env.OPENCAGE_API_KEY;
  private static baseUrl = "https://api.opencagedata.com/geocode/v1/json";

  static async getCoordinates(
    address: string,
    city: string
  ): Promise<GeocodingResult> {
    if (!this.apiKey) {
      throw new AppError("OpenCage API key is not configured", 500);
    }

    try {
      const query = `${address}, ${city}, Indonesia`;
      const response = await axios.get(this.baseUrl, {
        params: {
          q: query,
          key: this.apiKey,
          limit: 1,
          no_annotations: 1,
        },
      });

      if (response.data.results && response.data.results.length > 0) {
        const result = response.data.results[0];
        return {
          lat: result.geometry.lat,
          lng: result.geometry.lng,
          formattedAddress: result.formatted,
        };
      }

      throw new AppError("Location not found. Please check the address.", 400);
    } catch (error: any) {
      if (error instanceof AppError) throw error;
      throw new AppError("Failed to geocode address", 500);
    }
  }
}
