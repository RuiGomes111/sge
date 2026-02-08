import { PrismaClient } from "@prisma/client";

// Impede a criação de múltiplas instâncias do Prisma Client em desenvolvimento
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // Opcional: mostra as queries no terminal para debug
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;