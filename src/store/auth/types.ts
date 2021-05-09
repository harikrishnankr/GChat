export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const START_LOGOUT = 'LOGOUT_START';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';
export const AUTH_TYPE = 'auth';

export enum AuthStatus {
    StartLogin = 1,
    LoginSuccess,
    LoginError,
    StartLogout,
    LoggedOut,
    LogoutError
}

export interface IAuthRequest {
    g_token: string;
}

export interface IAuthResponse {
    email?: string;
    name?: string;
    token?: string;
    status?: number;
    userId?: string;
}

export interface IAuthState extends IAuthResponse {
    authStatus: AuthStatus;
}

interface ILoginStartAction {
    type: typeof START_LOGIN;
    payload: boolean;
}

interface ILoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: IAuthResponse;
}

interface ILoginErrorAction {
    type: typeof LOGIN_ERROR;
    payload: boolean;
}

interface ILogoutStartAction {
    type: typeof START_LOGOUT;
    payload: boolean;
}

interface ILogoutSuccessAction {
    type: typeof LOGOUT_SUCCESS;
    payload: boolean;
}

interface ILogoutErrorAction {
    type: typeof LOGOUT_ERROR;
    payload: boolean;
}

export type IAuthActionTypes = ILoginStartAction | ILoginSuccessAction | ILoginErrorAction |
ILogoutStartAction | ILogoutSuccessAction | ILogoutErrorAction;

export type IAuthDispatchType = (arg: IAuthActionTypes) => IAuthActionTypes;
