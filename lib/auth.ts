import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth<BetterAuthOptions>({
    database: prismaAdapter(prisma, {
        provider: "postgresql", 
    }),
    emailAndPassword:{
        enabled:true ,
        

    }
});