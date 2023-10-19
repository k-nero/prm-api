import "reflect-metadata"
import { Elysia } from "elysia";
import AccountController from "./AccountController";
import OrderController from "./OrderController";
import ProductController from "./ProductController";
import AuthenticateController from "./AuthenticateController";

const elysia = new Elysia();

elysia.group('/account', app => app.use(AccountController));
elysia.group('/order', app => app.use(OrderController));
elysia.group('/product', app => app.use(ProductController));
elysia.group('/authenticate', app => app.use(AuthenticateController));

export default elysia;