
interface AccountModel 
{
    Id: string;
    Username: string;
    Password: string;
    Fullname: string;
    Avatar: string;
    RoleName: string;
}

interface IAccountService 
{
    createAccount(account: AccountModel): Promise<any>;
    updateAccount(id: String, account: AccountModel): Promise<any>;
    deleteAccount(accountId: string): Promise<any>;
    getAccount(accountId: string): Promise<any>;
    getAccounts(): Promise<any[]>;
}

export { AccountModel, IAccountService };