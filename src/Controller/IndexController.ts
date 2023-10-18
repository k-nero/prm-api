import { Elysia } from "elysia";
import AccountController from "./AccountController";

const elysia = new Elysia();

elysia.group('/account', app => app.use(AccountController));

export default elysia;