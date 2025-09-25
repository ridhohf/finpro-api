import { v2 as cloudinary } from 'cloudinary';
import { config } from '../config';
import { AppError } from '../utils/app.error';

cloudinary.config({
  cloud_name: config.cloudinaryCloudName,
  api_key: config.cloudinaryApiKey,
  api_secret: config.cloudinaryApiSecret,
});

class CloudinaryService {
  async uploadImage(file: Express.Multer.File): Promise<any> {
    try {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.mimetype)) {
        throw new AppError('Only JPEG, PNG, and GIF files are allowed', 400);
      }

      // Validate file size (1MB = 1024 * 1024 bytes)
      const maxSize = 1 * 1024 * 1024;
      if (file.size > maxSize) {
        throw new AppError('File size must be less than 1MB', 400);
      }

      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            resource_type: 'image',
            folder: 'property-renting/avatars',
            transformation: [
              { width: 400, height: 400, crop: 'fill' },
              { quality: 'auto' }
            ]
          },
          (error, result) => {
            if (error) {
              reject(new AppError('Failed to upload image', 500));
            } else {
              resolve(result);
            }
          }
        ).end(file.buffer);
      });
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError('Failed to process image upload', 500);
    }
  }

  async deleteImage(publicId: string): Promise<void> {
    try {
      await cloudinary.uploader.destroy(publicId);
    } catch (error) {
      throw new AppError('Failed to delete image', 500);
    }
  }
}

export default new CloudinaryService();