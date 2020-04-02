import { IAuthService } from './interface/IAuthService';
import { IAuthHttpClient } from '../http/interface/IAuthHttpClient';
import { httpClient } from '../http/httpApiClient';
import { Login, Token } from '../types';

export class AuthService implements IAuthService {
  client: IAuthHttpClient;

  constructor(client: IAuthHttpClient = httpClient) {
    this.client = client;
  }

  Login = async (login: Login): Promise<Token> => {
    const tokens = await this.client.Login(login);

    return tokens;
  };

  Logout = async (): Promise<void> => {
    await this.client.Logout();
  };

  ForgotPassword = async (login: Login): Promise<void> => {
    await this.client.ForgotPassword(login);
  };
}

export const authService: IAuthService = new AuthService();