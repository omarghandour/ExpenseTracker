import { Elysia } from "elysia";
import { apollo, gql } from "@elysiajs/apollo";
import mergedTypeDefs from "../typeDefs";
import mergedResolvers from "../resolvers";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(
    apollo({
      typeDefs: mergedTypeDefs,
      resolvers: mergedResolvers,
    })
  )
  .use(cors())
  .listen(3000);
