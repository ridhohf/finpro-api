import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'stayinn/payment-proofs',
    allowed_formats: ['jpg', 'jpeg', 'png'],
    transformation: [
      { width: 800, height: 600, crop: 'limit' },
      { quality: 'auto:good' },
    ],
    public_id: (req: any, file: any) => {
      const timestamp = Date.now();
      const transactionId = req.params.id || 'unknown';
      return `payment-${transactionId}-${timestamp}`;
    },
  } as any,
});

export default cloudinary;
