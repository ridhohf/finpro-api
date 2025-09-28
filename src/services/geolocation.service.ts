// src/services/geolocation.service.ts
import axios from 'axios';
import logger from '../utils/logger';
import { config } from '../config';

interface Coordinates {
  lat: number;
  lng: number;
}

interface OpenCageResponse {
  results: Array<{
    geometry: {
      lat: number;
      lng: number;
    };
    components: {
      city?: string;
      town?: string;
      village?: string;
      country?: string;
    };
    confidence: number;
  }>;
  status: {
    code: number;
    message: string;
  };
}

class GeolocationService {
  private readonly baseUrl = 'https://api.opencagedata.com/geocode/v1/json';
  private readonly apiKey = config.openCageApiKey;

  async getCoordinates(city: string, address: string): Promise<Coordinates | null> {
    try {
      if (!this.apiKey) {
        logger.warn('OpenCage API key not configured, skipping geocoding');
        return null;
      }

      // Combine address and city for better accuracy
      const query = `${address}, ${city}`;
      
      const response = await axios.get<OpenCageResponse>(this.baseUrl, {
        params: {
          q: query,
          key: this.apiKey,
          limit: 1,
          countrycode: 'id', // Limit to Indonesia
          language: 'en',
          pretty: 0,
        },
        timeout: 10000, // 10 second timeout
      });

      if (response.data.status.code !== 200) {
        logger.error(`OpenCage API error: ${response.data.status.message}`);
        return null;
      }

      if (!response.data.results || response.data.results.length === 0) {
        logger.warn(`No geocoding results found for: ${query}`);
        return null;
      }

      const result = response.data.results[0];
      
      // Check confidence level (OpenCage returns 0-10, we want at least 5)
      if (result.confidence < 5) {
        logger.warn(`Low confidence geocoding result (${result.confidence}) for: ${query}`);
      }

      const coordinates: Coordinates = {
        lat: result.geometry.lat,
        lng: result.geometry.lng,
      };

      logger.info(`Geocoded "${query}" to coordinates: ${coordinates.lat}, ${coordinates.lng}`);
      return coordinates;

    } catch (error) {
      logger.error('Geocoding error:', error);
      return null;
    }
  }

  async getCityFromCoordinates(lat: number, lng: number): Promise<string | null> {
    try {
      if (!this.apiKey) {
        logger.warn('OpenCage API key not configured, skipping reverse geocoding');
        return null;
      }

      const response = await axios.get<OpenCageResponse>(this.baseUrl, {
        params: {
          q: `${lat},${lng}`,
          key: this.apiKey,
          limit: 1,
          language: 'en',
          pretty: 0,
        },
        timeout: 10000,
      });

      if (response.data.status.code !== 200) {
        logger.error(`OpenCage API error: ${response.data.status.message}`);
        return null;
      }

      if (!response.data.results || response.data.results.length === 0) {
        logger.warn(`No reverse geocoding results found for: ${lat}, ${lng}`);
        return null;
      }

      const result = response.data.results[0];
      const components = result.components;

      // Try to get city name from various possible fields
      const city = components.city || 
                   components.town || 
                   components.village || 
                   'Unknown City';

      logger.info(`Reverse geocoded coordinates ${lat}, ${lng} to city: ${city}`);
      return city;

    } catch (error) {
      logger.error('Reverse geocoding error:', error);
      return null;
    }
  }

  // Utility method to validate coordinates
  validateCoordinates(lat: number, lng: number): boolean {
    return (
      typeof lat === 'number' && 
      typeof lng === 'number' &&
      lat >= -90 && lat <= 90 &&
      lng >= -180 && lng <= 180 &&
      !isNaN(lat) && !isNaN(lng)
    );
  }

  // Calculate distance between two points using Haversine formula
  calculateDistance(
    lat1: number, 
    lng1: number, 
    lat2: number, 
    lng2: number
  ): number {
    if (!this.validateCoordinates(lat1, lng1) || !this.validateCoordinates(lat2, lng2)) {
      throw new Error('Invalid coordinates provided');
    }

    const R = 6371; // Earth's radius in kilometers
    const dLat = this.toRadians(lat2 - lat1);
    const dLng = this.toRadians(lng2 - lng1);
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return Math.round(distance * 100) / 100; // Round to 2 decimal places
  }

  private toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }
}

export default new GeolocationService();