interface IAuthenticateModel 
{
    username: string;
    password: string;
}

interface IAuthenticateService 
{
    login(authenticateModel: IAuthenticateModel): Promise<any>;
    register(authenticateModel: IAuthenticateModel): Promise<any>;
}

export { IAuthenticateModel, IAuthenticateService };