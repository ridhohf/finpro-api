import { OAuth2Client } from 'google-auth-library';
import { AppError } from './app.error';

interface GoogleUserPayload {
  sub: string;
  email: string;
  email_verified: boolean;
  name?: string;
  picture?: string;
  given_name?: string;
  family_name?: string;
}

export class GoogleUtil {
  private static client: OAuth2Client | null = null;

  private static getClient(): OAuth2Client {
    if (!this.client) {
      const clientId = process.env.GOOGLE_CLIENT_ID;

      if (!clientId) {
        throw new AppError(
          'GOOGLE_CLIENT_ID is not configured in environment variables',
          500
        );
      }

      this.client = new OAuth2Client(clientId);
    }

    return this.client;
  }

  static async verifyIdToken(idToken: string): Promise<GoogleUserPayload> {
    try {
      const client = this.getClient();

      const ticket = await client.verifyIdToken({
        idToken: idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();

      if (!payload) {
        throw new AppError('Invalid Google token - no payload', 401);
      }

      if (!payload.email) {
        throw new AppError('Email not provided by Google', 400);
      }

      if (!payload.email_verified) {
        throw new AppError('Google email is not verified', 400);
      }

      return {
        sub: payload.sub,
        email: payload.email,
        email_verified: payload.email_verified,
        name: payload.name,
        picture: payload.picture,
        given_name: payload.given_name,
        family_name: payload.family_name,
      };
    } catch (error: any) {
      // Handle Google-specific errors
      if (error.message?.includes('Token used too late')) {
        throw new AppError('Google token has expired', 401);
      }

      if (error.message?.includes('Invalid token signature')) {
        throw new AppError('Invalid Google token signature', 401);
      }

      // Re-throw AppError as is
      if (error instanceof AppError) {
        throw error;
      }

      // Log unexpected errors
      console.error('Google token verification error:', error);
      throw new AppError('Failed to verify Google token', 500);
    }
  }

  static async verifyAccessToken(
    accessToken: string
  ): Promise<GoogleUserPayload> {
    try {
      const response = await fetch(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new AppError('Failed to fetch Google user info', 401);
      }

      const data = await response.json();

      if (!data.email) {
        throw new AppError('Email not provided by Google', 400);
      }

      return {
        sub: data.sub,
        email: data.email,
        email_verified: data.email_verified || false,
        name: data.name,
        picture: data.picture,
        given_name: data.given_name,
        family_name: data.family_name,
      };
    } catch (error: any) {
      if (error instanceof AppError) {
        throw error;
      }

      console.error('Google access token verification error:', error);
      throw new AppError('Failed to verify Google access token', 500);
    }
  }

  static getDisplayName(payload: GoogleUserPayload): string {
    if (payload.name) {
      return payload.name;
    }

    if (payload.given_name) {
      return payload.family_name
        ? `${payload.given_name} ${payload.family_name}`
        : payload.given_name;
    }

    // Fallback to email username
    return payload.email.split('@')[0];
  }
}
