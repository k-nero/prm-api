import { AccountModel, IAccountService } from "../Service.Contract/IAccount"
import db from "../../Repository/DbContext";
import Account from "../../Repository/Entities/Account";
import { Guid } from "typescript-guid";
import { eq } from "drizzle-orm";

class AccountService implements IAccountService 
{
    async createAccount(account: AccountModel): Promise<string> 
    {
        account.Id = Guid.create().toString();
        await db.insert(Account).values(account).execute();
        return account.Id;
    }
    async updateAccount(id: string, account: AccountModel): Promise<number>
    {
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
        var account = await db.select().from(Account).where(eq(Account.Id, accountId)).limit(1).execute();
        return account;
    }
    async getAccounts(): Promise<any[]> 
    {
        return await db.select().from(Account).execute();
    }

}

export default AccountService;