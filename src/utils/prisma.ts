import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient({
  log:["error", "warn"],
});

process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

export default prisma;
