import { IAuthDispatchType } from './types';
export declare const login: (token: string) => (dispatch: IAuthDispatchType) => void;
export declare const logout: (_gError?: boolean | undefined) => (dispatch: IAuthDispatchType) => void;
