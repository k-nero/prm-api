import { Context } from "elysia";

async function authorize(ctx: Context) {
    var token = ctx.bearer;
    if(token == null) 
    {
        ctx.set.status = 401;
        ctx.set.headers['WWW-Authenticate'] = 'Bearer';
        return "Unauthorized";
    }

    var user = await ctx.jwt.verify(token);
    if(user == null)
    {
        ctx.set.status = 401;
        ctx.set.headers['WWW-Authenticate'] = 'Bearer';
        return "Unauthorized";
    }

    ctx.store.user = user;

    if(user.RoleName != "admin")
    {
        ctx.set.status = 403;
        return "Forbidden";
    }
}

export default authorize;