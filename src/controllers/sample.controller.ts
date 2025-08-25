import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/app.error';
import { SampleService } from '../services/sample.service';

export class SampleController {
  private sampleService = new SampleService();

  constructor() {
    this.getSampleData = this.getSampleData.bind(this);
  }

  async getSampleData(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, code } = req.body;

      const findSample = await this.sampleService.findSample({
        name,
        code,
      });

      /*
         📒Docs: Using the AppError class for handling exceptions
      */
      if (!findSample) throw new AppError('Sample data is not found', 404);

      res.status(200).json({
        success: true,
        message: 'Get sample data successfull',
        samples: findSample,
      });
    } catch (error) {
      next(error);
    }
  }
}
