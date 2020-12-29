import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IAuthState } from '../../store/auth/types';
export declare type LoginDispatcher = ThunkDispatch<{}, undefined, Action>;
export declare type LogoutDispatcher = ThunkDispatch<{}, undefined, Action>;
export interface IDispatchProps {
    loginUser: (token: string) => void;
}
export interface ILogoutDispatchProps {
    logoutUser: (_gError?: boolean) => void;
}
export declare type LoginProps = IDispatchProps & IAuthState;
export declare type LogoutProps = ILogoutDispatchProps & IAuthState;
