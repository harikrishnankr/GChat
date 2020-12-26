import { IAuthActionTypes, IAuthState, START_LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, AuthStatus, START_LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from './types';


const initialState: IAuthState = {
    authStatus: AuthStatus.LoggedOut,
    email: '',
    name: '',
    token: ''
};

export default (state = initialState, action: IAuthActionTypes): IAuthState => {
    switch (action.type) {
        case START_LOGIN:
            return { authStatus: AuthStatus.StartLogin };
        case LOGIN_SUCCESS:
            return {
                authStatus: AuthStatus.LoginSuccess,
                ...action.payload
            };
        case LOGIN_ERROR:
            return { authStatus: AuthStatus.LoginError };
        case START_LOGOUT:
            return { authStatus: AuthStatus.StartLogout };
        case LOGOUT_SUCCESS:
            return { authStatus: AuthStatus.LoggedOut };
        case LOGOUT_ERROR:
            return { authStatus: AuthStatus.LogoutError };
        default:
            return state;
    }
};
