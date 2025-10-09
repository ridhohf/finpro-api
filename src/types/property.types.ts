// Property Types
export interface Property {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  category?: {
    id: number;
    name: string;
  };
  picture: string[]; // Array of image URLs
  address: string;
  city: string;
  lat?: number;
  lng?: number;
  tenant?: {
    id: number;
    name: string;
    email: string;
  };
  rooms?: Room[];
  averageRating?: number;
  totalReviews?: number;
  minPrice?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Room {
  id: number;
  propertyId: number;
  name: string;
  description: string;
  basePrice: number;
  maxGuests: number;
  picture: string[];
  createdAt: string;
  updatedAt: string;
}

export interface RoomAvailability {
  id: number;
  roomId: number;
  date: string;
  isAvailable: boolean;
  priceOverride?: number;
  finalPrice: number; // Calculated with peak season
}

export interface PeakSeason {
  id: number;
  roomId: number;
  name: string;
  startDate: string;
  endDate: string;
  priceIncreaseType: 'PERCENTAGE' | 'FIXED';
  value: number;
}

// Transaction Types
export interface Transaction {
  id: number;
  userId: number;
  propertyId: number;
  roomId: number;
  checkIn: string;
  checkOut: string;
  duration: number;
  totalPrice: number;
  status: TransactionStatus;
  reminderSentAt?: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    id: number;
    name: string;
    email: string;
  };
  property?: {
    id: number;
    name: string;
    address: string;
    city: string;
  };
  room?: {
    id: number;
    name: string;
    basePrice: number;
  };
  paymentProofs?: PaymentProof[];
}

export type TransactionStatus =
  | 'PENDING_PAYMENT'
  | 'PENDING_CONFIRMATION'
  | 'CONFIRMED'
  | 'CANCELLED'
  | 'COMPLETED';

export interface PaymentProof {
  id: number;
  reservationId: number;
  image: string;
  isValid: boolean;
  rejectedReason?: string;
  uploadedAt: string;
  updatedAt: string;
}

// Review Types
export interface Review {
  id: number;
  userId: number;
  propertyId: number;
  reservationId: number;
  rating: number;
  comment: string;
  tenantReply?: string;
  repliedAt?: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    id: number;
    name: string;
  };
  property?: {
    id: number;
    name: string;
  };
}

// Request/Response Types
export interface CreateBookingRequest {
  roomId: number;
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
}

export interface UploadPaymentProofRequest {
  transactionId: number;
  paymentProof: File;
}

export interface SubmitReviewRequest {
  rating: number; // 1-5
  comment: string;
}

export interface PropertySearchParams {
  city?: string;
  checkIn?: string;
  checkOut?: string;
  minPrice?: number;
  maxPrice?: number;
  guests?: number;
  categoryId?: number;
  page?: number;
  limit?: number;
  sortBy?: 'price' | 'name' | 'rating';
  sortOrder?: 'asc' | 'desc';
}

export interface TransactionFilter {
  status?: TransactionStatus;
  propertyId?: number;
  startDate?: string;
  endDate?: string;
}

// Report Types
export interface SalesReport {
  summary: {
    totalTransactions: number;
    totalRevenue: number;
    averageBookingValue: number;
  };
  byProperty: {
    propertyName: string;
    bookings: number;
    revenue: number;
  }[];
  transactions: {
    id: number;
    bookingDate: string;
    checkIn: string;
    checkOut: string;
    property: string;
    room: string;
    guest: string;
    duration: number;
    totalPrice: number;
  }[];
}

export interface AvailabilityReport {
  month: number;
  year: number;
  properties: {
    propertyId: number;
    propertyName: string;
    rooms: {
      roomId: number;
      roomName: string;
      calendar: {
        [day: number]: {
          date: string;
          status: 'AVAILABLE' | 'BOOKED';
        };
      };
    }[];
  }[];
}
