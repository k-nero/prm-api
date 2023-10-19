import "reflect-metadata";
import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'
import jwt from "@elysiajs/jwt";

import IndexController from "./Controller/IndexController";

const app = new Elysia();
app.use(cors());
app.use(swagger({
  path: '/swagger',
  autoDarkMode: false,
  documentation: {
    info: {
      title: 'ElysiaJS API',
      description: 'ElysiaJS API for PRM',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://elysiajs.com',
      description: 'Find more info here',
    },
    tags: [
      { name: 'Account', description: 'Account API' },
      { name: 'Order', description: 'Order API' },
      { name: 'Product', description: 'Product API' },
      { name: 'Authenticate', description: 'Authenticate API' },
    ],
    openapi: '3.0.3',
    security: [ { Authorization: [] }],
    components: {
      securitySchemes: {
        Authorization: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Bearer JWT token here",
        }
      }
    }
  },

}));

app.group('/api', app => app.use(IndexController));
app.use(jwt({
  secret: process.env.JWT_SECRET || 'secret',
  alg: "HS512",
  exp: "1d",
  name: "jwt",
  iss: "elysia",
  sub: "elysia",
  aud: "elysia",
}));
app.listen(3000);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
