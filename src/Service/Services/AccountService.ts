import { AccountModel, IAccountService } from "../Service.Contract/IAccount"
import db from "../../Repository/DbContext";
import { Account } from "../../Repository/Entities/Account";
import { eq } from "drizzle-orm";

class AccountService implements IAccountService 
{
    async createAccount(account: AccountModel): Promise<string> 
    {
        account.CreatedAt = new Date();
        var result = await db.insert(Account).values(account).returning().get();
        return result.Id;
    }
    async updateAccount(id: string, account: AccountModel): Promise<number>
    {
        account.UpdatedAt = new Date();
        var result = await db.update(Account).set(account).where(eq(Account.Id, id)).execute();
        return result.rowsAffected;
    }
    async deleteAccount(accountId: string): Promise<number>
    {
        var result = await db.delete(Account).where(eq(Account.Id, accountId)).execute();
        return result.rowsAffected;
    }
    async getAccount(accountId: string): Promise<any>
    {
        var result = await db.query.Account.findFirst({
            where: eq(Account.Id, accountId)
        }).execute();
        return result;
    }
    async getAccounts(): Promise<any[]> 
    {
        var result = await db.query.Account.findMany().execute();
        return result;
    }

}

export default AccountService;