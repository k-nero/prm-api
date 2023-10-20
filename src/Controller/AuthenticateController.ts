import "reflect-metadata"
import { Elysia, t } from "elysia"
import  AuthenticateSerivce  from "../Service/Services/AuthenticateService";

const body = t.Object({
    username: t.String(),
    password: t.String()
});

const detail = {
    tags: ['Authenticate']
}

const elysia = new Elysia();
elysia.decorate('authenticateService', new AuthenticateSerivce())
.post("/login", async ({ body, jwt, authenticateService }) => { 
    var result = await authenticateService.login(body);
    //return jwt.sign(result);
    return result;
 }, { body: body, detail: detail })
.post("/register", async ({ body, jwt, authenticateService }) => {
    var result = await authenticateService.register(body);
    return jwt.sign(result);
}, { body: body, detail: detail })

export default elysia;