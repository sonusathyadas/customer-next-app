import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaBetterSqlite3({ url: connectionString });

declare global {
    // Prevent multiple instances of Prisma Client in development
    // (Next.js hot-reloading can cause this issue)
    var prisma: PrismaClient | undefined;
}

export const db = global.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
    global.prisma = db;
}