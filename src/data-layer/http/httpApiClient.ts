import axios from 'axios';
import { IAuthHttpClient } from './interface/IAuthHttpClient';
import { Login, Token } from "../types";
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  RESET_PASSWORD,
} from './endpoints';

export class HttpClient implements IAuthHttpClient {
  Login = async (login: Login): Promise<Token> => {
    const { data }: { data: Token } = await axios.post(AUTH_LOGIN, {
      login: login.login,
      password: login.password
    });

    return data;
  };

  Logout = async (): Promise<void> => {
    await axios.default.post(AUTH_LOGOUT);
  };

  ForgotPassword = async (login: Login): Promise<void> => {
    await axios.post(RESET_PASSWORD, {
      login: login.login,
      password: login.password
    });
  };
}

export const httpClient = new HttpClient();