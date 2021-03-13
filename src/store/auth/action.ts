import { APP_ROUTE } from '../../config';
import { UserStatus } from '../../shared/components/avatar';
import { removeAuth, setAuth } from '../../shared/utils/auth';
import { postRequest } from '../../shared/utils/http';
import { IAuthDispatchType, IAuthRequest, IAuthResponse, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_SUCCESS, START_LOGIN, START_LOGOUT } from './types';

export const login = (token: string) => (dispatch: IAuthDispatchType) => {
    dispatch({
        type: START_LOGIN,
        payload: true
    });
    const data: IAuthRequest = {
        g_token: token
    };
    if (token) {
        postRequest(`${APP_ROUTE}/auth`, { data, addAuth: false })
        .then((auth: IAuthResponse) => {
            setAuth(auth.token as string);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    ...auth,
                    status: UserStatus.Online
                }
            });
        })
        .catch(() => dispatch({
                type: LOGIN_ERROR,
                payload: false
            })
        );
    } else {
        dispatch({
            type: LOGIN_ERROR,
            payload: false
        });
    }
};

export const logout = (_gError?: boolean) => (dispatch: IAuthDispatchType) => {
    dispatch({
        type: START_LOGOUT,
        payload: true
    });

    if (_gError) {
        dispatch({
            type: LOGOUT_ERROR,
            payload: true
        });
    } else {
        removeAuth();
        dispatch({
            type: LOGOUT_SUCCESS,
            payload: true
        });
    }

};
