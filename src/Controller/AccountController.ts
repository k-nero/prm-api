import "reflect-metadata"
import { Elysia, t } from "elysia";
import AccountService  from "../Service/Services/AccountService";

const detail = {
      tags: ['Account']
    };

const body = t.Object({
    Username: t.String(),
    Password: t.String(),
    Avatar: t.String(),
    RoleName: t.String(),
});

const elysia = new Elysia();
elysia.decorate('accountService', new AccountService());

elysia.get("/", async ({accountService}) => accountService.getAccounts(), {detail: detail});
elysia.get("/:id", async ({accountService, params}) => accountService.getAccount(params.id), {detail: detail});
elysia.post("/", async ({accountService, body}) => accountService.createAccount(body), {body: body, detail: detail});
elysia.patch("/:id", async ({accountService, body, params}) => accountService.updateAccount(params.id, body), {body: body, detail: detail});
elysia.delete("/:id", async ({accountService, params}) => accountService.deleteAccount(params.id), {detail: detail});

export default elysia;