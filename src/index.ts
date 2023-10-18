import "reflect-metadata";
import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'

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
    tags: [
      { name: 'Account', description: 'Account API' },
      { name: 'Order', description: 'Order API' },
      { name: 'Product', description: 'Product API' },
    ]
  }
}));

app.group('/api', app => app.use(IndexController));

app.listen(3000);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
