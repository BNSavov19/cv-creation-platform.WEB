import { AuthApi, type UserDTO } from '@/api';
import { type AxiosResponse } from 'axios';
import { WebApiService } from '@/services/web-api-service'

export class AuthenticationService extends WebApiService {
    
    constructor() {
        super();
        this.userAuthApi = new AuthApi;
    }

    userAuthApi: AuthApi;

    public async makeLoginRequest(username: string, password: string): Promise<AxiosResponse<UserDTO, any>> {
        return await this.userAuthApi.apiAuthLoginPostForm(username, password, this.generateHeader()); 
    }

    public async makeRegisterRequest(username: string, email: string, password: string): Promise<AxiosResponse<void, any>> {
        return await this.userAuthApi.apiAuthRegisterPostForm(username, email, password, this.generateHeader());
    }

    public async renewToken(refreshToken: string) {
        return await this.userAuthApi.apiAuthRenewTokenPostForm(refreshToken, this.generateHeader());
    }
}

const authService = new AuthenticationService();
export default authService;