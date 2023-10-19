interface IAuthenticateModel 
{
    Username: string;
    Password: string;
}

interface IAuthenticateService 
{
    login(authenticateModel: IAuthenticateModel): Promise<any>;
    register(authenticateModel: IAuthenticateModel): Promise<any>;
}

export { IAuthenticateModel, IAuthenticateService };