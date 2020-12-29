export declare const START_LOGIN = "START_LOGIN";
export declare const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export declare const LOGIN_ERROR = "LOGIN_ERROR";
export declare const START_LOGOUT = "LOGOUT_START";
export declare const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export declare const LOGOUT_ERROR = "LOGOUT_ERROR";
export declare const AUTH_TYPE = "auth";
export declare enum AuthStatus {
    StartLogin = 1,
    LoginSuccess = 2,
    LoginError = 3,
    StartLogout = 4,
    LoggedOut = 5,
    LogoutError = 6
}
export interface IAuthRequest {
    g_token: string;
}
export interface IAuthResponse {
    email?: string;
    name?: string;
    token?: string;
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
export declare type IAuthActionTypes = ILoginStartAction | ILoginSuccessAction | ILoginErrorAction | ILogoutStartAction | ILogoutSuccessAction | ILogoutErrorAction;
export declare type IAuthDispatchType = (arg: IAuthActionTypes) => IAuthActionTypes;
export {};
