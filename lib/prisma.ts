//purpose: centralize the creation and configuration of PrismaClient, then give the rest of app one reusalbe instance.

//npx prisma generate: to regenerate the prismaClient from our curr client prisma

import { PrismaClient } from "../app/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
}) // creates a postgresql connection adapter for prisma 

const globalForPrisma = global as unknown as {
    prisma: PrismaClient;
} // to put our prisma client somewhere global so we can reuse the same instance

const prisma = globalForPrisma.prisma || new PrismaClient({
    adapter,
})


if(process.env.NODE_ENV !== "production"){
    globalForPrisma.prisma = prisma; 
}

export default prisma 