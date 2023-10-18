import "reflect-metadata"
import { Elysia, t } from "elysia";
import AccountService  from "../Service/Services/AccountService";

const body = t.Object({
    Username: t.String(),
    Password: t.String(),
    Avatar: t.String(),
    RoleName: t.String(),
});

const elysia = new Elysia();
elysia.decorate('accountService', new AccountService());

elysia.get("/", ({accountService}) => accountService.getAccounts());
elysia.get("/:id", ({accountService, params}) => accountService.getAccount(params.id));
elysia.post("/", ({accountService, body}) => accountService.createAccount(body), {body: body});
elysia.patch("/:id", ({accountService, body, params}) => accountService.updateAccount(params.id, body), {body: body});
elysia.delete("/:id", ({accountService, params}) => accountService.deleteAccount(params.id));

export default elysia;