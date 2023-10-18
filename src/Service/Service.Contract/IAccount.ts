interface AccountModel 
{
    Username: string;
    Password: string;
    Avatar: string;
    RoleName: string;
    CreatedAt?: Date;
    UpdatedAt?: Date;
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