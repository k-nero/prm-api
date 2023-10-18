import { Elysia } from "elysia";
import AccountController from "./AccountController";
import OrderController from "./OrderController";

const elysia = new Elysia();

elysia.group('/account', app => app.use(AccountController));
elysia.group('/order', app => app.use(OrderController));

export default elysia;