import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { AppError } from "./app.error";

export class CloudinaryUtil {
  static initialize(): void {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    console.log("✓ Cloudinary configured");
  }

  static async uploadImage(
    file: Express.Multer.File,
    folder: string = "property-renting"
  ): Promise<string> {
    try {
      const result: UploadApiResponse = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder,
            resource_type: "auto",
            transformation: [
              { width: 1000, height: 1000, crop: "limit" },
              { quality: "auto:good" },
            ],
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result!);
          }
        );
        uploadStream.end(file.buffer);
      });

      return result.secure_url;
    } catch (error) {
      throw new AppError("Failed to upload image to Cloudinary", 500);
    }
  }

  static async deleteImage(publicId: string): Promise<void> {
    try {
      await cloudinary.uploader.destroy(publicId);
    } catch (error) {
      console.error("Failed to delete image from Cloudinary:", error);
    }
  }
}
