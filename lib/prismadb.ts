import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient(); //to deal with the bunch of prisma client instances created by nextjs hot reloading
if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;
