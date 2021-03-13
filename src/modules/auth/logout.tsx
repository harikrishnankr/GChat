import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import { G_AUTH_CLIENT_ID } from '../../config';
import { logout } from '../../store/auth/action';
import { IAuthState } from '../../store/auth/types';
import { IStore } from '../../store/types';
import './login.scss';
import { ILogoutDispatchProps, LogoutDispatcher, LogoutProps } from './types';

const Logout = (props: LogoutProps) => {
    const onLogoutSuccess = () => {
        props.logoutUser();
    };

    const onFailure = () => {
        props.logoutUser(true);
    };

    return (
        <GoogleLogout
            clientId={G_AUTH_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={onLogoutSuccess}
            onFailure={onFailure}
            render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className='button-text logout'>Sign out</button>
            )}
        ></GoogleLogout>
    );
}

const mapStateToProps = (store: IStore): IAuthState => ( { ...store.auth });

const mapDispatchToProps = (dispatch: LogoutDispatcher): ILogoutDispatchProps => ({
    logoutUser: (_gError?: boolean) => dispatch(logout(_gError))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
