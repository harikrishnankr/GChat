import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IAuthState } from '../../store/auth/types';

export type LoginDispatcher = ThunkDispatch<{}, undefined, Action>;
export type LogoutDispatcher = ThunkDispatch<{}, undefined, Action>;

export interface IDispatchProps {
    loginUser: (token: string) => void
}

export interface ILogoutDispatchProps {
    logoutUser: (_gError?: boolean) => void
}

export type LoginProps = IDispatchProps & IAuthState;
export type LogoutProps = ILogoutDispatchProps & IAuthState;
