import { AuthApi } from '@/api';
import { type AxiosResponse } from 'axios';
import { WebApiService } from '@/services/web-api-service'

export class AuthenticationService extends WebApiService {
    
    constructor() {
        super();
        this,this.userAuthApi = new AuthApi;
    }

    userAuthApi: AuthApi;

    public async makeLoginRequest(username: string, password: string): Promise<AxiosResponse<void, any>> {
        console.log(username, password);
        return await this.userAuthApi.apiAuthLoginPostForm(username, password, this.generateHeader()); 
    }

    public async makeRegisterRequest(username: string, email: string, password: string): Promise<AxiosResponse<void, any>> {
        return await this.userAuthApi.apiAuthRegisterPostForm(username, email, password, this.generateHeader());
    }
}

const authService = new AuthenticationService();
export default authService;