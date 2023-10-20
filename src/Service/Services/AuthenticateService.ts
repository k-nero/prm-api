import { IAuthenticateModel, IAuthenticateService } from "../Service.Contract/IAuthenticate";
import db from "../../Repository/DbContext";
import { eq } from "drizzle-orm";
import { Account } from "../../Repository/Entities/Account";
import { compare, genSalt, hash } from "bcrypt-ts";

class AuthenticateSerivce implements IAuthenticateService
{
    async login(authenticateModel: IAuthenticateModel): Promise<any>
    {
        var user = await db.query.Account.findFirst({
            where: eq(Account.Username, authenticateModel.username)
        }).execute();
        
        if(user == null)
        {
            throw new Error("User not found.");
        }

        const validPassword = await compare(authenticateModel.password, user.Password);
        if(!validPassword)
        {
            throw new Error("Invalid password.");
        }
        return user;
    }

    async register(authenticateModel: IAuthenticateModel): Promise<any>
    {
        var user = db.query.Account.findFirst({
            where: eq(Account.Username, authenticateModel.username)
        }).execute();

        if(user == null)
        {
            throw new Error("User already exists.");
        }

        const salt = await genSalt(10);
        const hashedPassword = await hash(authenticateModel.password, salt);

        var result = await db.insert(Account).values({
            Username: authenticateModel.username,
            Password: hashedPassword,
            CreatedAt: new Date()
        }).returning().get();

        return result;
    }
}

export default AuthenticateSerivce;