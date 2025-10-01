import multer from 'multer';
import { cloudinaryStorage } from './cloudinary.util';

export const upload = multer({
  storage: cloudinaryStorage,
  limits: { fileSize: 1024 * 1024, files: 1 },
  fileFilter: (req: any, file: any, cb: any) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedTypes.includes(file.mimetype)) {
      cb(new Error('Only .jpg, .jpeg, and .png files are allowed'));
      return;
    }
    cb(null, true);
  },
});
