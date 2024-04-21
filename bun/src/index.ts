import { Elysia } from "elysia";
import { apollo } from "@elysiajs/apollo";
import mergedTypeDefs from "../typeDefs";
import mergedResolvers from "../resolvers";
import { cors } from "@elysiajs/cors";
import { connectDB } from "../db/connectDB";

const app = new Elysia()
  .use(
    apollo({
      typeDefs: mergedTypeDefs,
      resolvers: mergedResolvers,
    })
  )
  .use(cors())
  .listen(3000);
await connectDB();
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
