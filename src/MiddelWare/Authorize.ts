import "reflect-metadata"
import { Context } from "elysia";

async function authorize(context: Context) {
    var token = context.bearer;
    if(token == null) 
    {
        context.set.status = 401;
        context.set.headers['WWW-Authenticate'] = 'Bearer';
        return "Unauthorized";
    }

    var user = await context.jwt.verify(token);
    if(user == null)
    {
        context.set.status = 401;
        context.set.headers['WWW-Authenticate'] = 'Bearer';
        return "Unauthorized";
    }

    context.store.user = user;

    if(user.RoleName != "admin")
    {
        context.set.status = 403;
        return "Forbidden";
    }
}

export default authorize;