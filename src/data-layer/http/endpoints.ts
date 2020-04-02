const MAIN_URL =
  process.env.REACT_APP_BACKEND_LOCAL_URL || 'https://localhost:5001';
const API = '/api';

export const AUTH_LOGIN = `${MAIN_URL}${API}/auth/login`;
export const AUTH_LOGOUT = `${MAIN_URL}${API}/auth/logout`;
export const RESET_PASSWORD = `${MAIN_URL}${API}/auth/release-reset-password-code`;
export const RELEASE_REFRESH_TOKEN = `${MAIN_URL}${API}/auth/release-refresh-token`;