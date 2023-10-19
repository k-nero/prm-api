import "reflect-metadata"
import { Elysia, t } from "elysia";
import AccountService  from "../Service/Services/AccountService";
import { bearer } from "@elysiajs/bearer";
import authorize from "../MiddelWare/Authorize";

const detail = {
      tags: ['Account']
    };

const body = t.Object({
    Username: t.String(),
    Password: t.String(),
    Avatar: t.String(),
    RoleName: t.String(),
});

const elysia = new Elysia().use(bearer())
elysia.decorate('accountService', new AccountService())
.guard({detail: detail, beforeHandle: authorize}, app => app
    .get("/", async ({accountService}) => accountService.getAccounts())
    .get("/:id", async ({accountService, params}) => accountService.getAccount(params.id))
    .delete("/:id", async ({accountService, params}) => accountService.deleteAccount(params.id)))
.guard({body: body, detail: detail}, app => app
    .post("/", async ({accountService, body}) => accountService.createAccount(body))
    .patch("/:id", async ({accountService, body, params}) => accountService.updateAccount(params.id, body)));

export default elysia;