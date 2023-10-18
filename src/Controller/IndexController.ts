import { Elysia } from "elysia";
import AccountController from "./AccountController";
import OrderController from "./OrderController";
import ProductController from "./ProductController";

const elysia = new Elysia();

elysia.group('/account', app => app.use(AccountController));
elysia.group('/order', app => app.use(OrderController));
elysia.group('/product', app => app.use(ProductController));

export default elysia;