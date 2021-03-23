import { Product } from './model/Product';

import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql"

import { PingResolver } from "./graphql/ping"
import { ProductResolver } from "./graphql/ProductResolver"


export async function startServer() {

  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver, ProductResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res })
  });

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}