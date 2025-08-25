import { Sample } from '../generated/prisma';

export class SampleService {
  async findSample({ name, code }: Pick<Sample, 'name' | 'code'>) {
    if (name && code) return true;
    return false;
  }
}
