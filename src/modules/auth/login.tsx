import React, { Fragment } from 'react';
import { GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogin } from 'react-google-login';
import { G_AUTH_CLIENT_ID } from '../../config';
import './login.scss';
import { refreshTokenSetup } from '../../shared/utils/refresh-token';
import { connect } from 'react-redux';
import { login } from '../../store/auth/action';
import { IStore } from '../../store/types';
import { AuthStatus, IAuthState } from '../../store/auth/types';
import { IDispatchProps, LoginDispatcher, LoginProps } from './types';

const Login = (props: LoginProps) => {
    const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        refreshTokenSetup(res as GoogleLoginResponse);
        props.loginUser((res as GoogleLoginResponse ).tokenId)
    };

    const onFailure = () => {
        props.loginUser('');
    };

    const { signIn, loaded } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId: G_AUTH_CLIENT_ID,
        isSignedIn: true,
        accessType: 'offline',
        // responseType: 'code',
        // prompt: 'consent',
    });

    return (
        <Fragment>
            {
                (loaded && props.authStatus !== AuthStatus.StartLogin) ? 
                <div className='login-wrapper'>
                    <div>
                        <div className='logo'></div>
                        <h3>Join Our Community</h3>
                        { props.authStatus === AuthStatus.LoginError ? 'Login Error' : '' }
                        <button onClick={signIn} className='button google-button'>
                            <div className='google-logo'></div>
                            <span className='buttonText'>Sign in with Google</span>
                        </button>
                    </div>
                </div> :
                null
            }
        </Fragment>
    );
};

const mapStateToProps = (store: IStore): IAuthState => ( { ...store.auth });

const mapDispatchToProps = (dispatch: LoginDispatcher): IDispatchProps => ({
    loginUser: (token: string) => dispatch(login(token))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);
