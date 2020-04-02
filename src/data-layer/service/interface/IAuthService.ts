import { Login, Token } from '../../types';

export interface IAuthService {
  Login(login: Login): Promise<Token>;
  Logout(): Promise<void>;
  ForgotPassword(login: Login): Promise<void>;
}
