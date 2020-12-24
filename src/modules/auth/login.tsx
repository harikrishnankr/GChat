import React from 'react';
import { GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogin } from 'react-google-login';
import { G_AUTH_CLIENT_ID } from '../../config';
import './login.scss';

// refresh token
import { refreshTokenSetup } from '../../shared/utils/refresh-token';

const Login = () => {
    const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        console.log('Login Success: currentUser:', (res as GoogleLoginResponse));
        refreshTokenSetup(res as GoogleLoginResponse);
    };

    const onFailure = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        console.log('Login failed: res:', res);
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId: G_AUTH_CLIENT_ID,
        isSignedIn: true,
        accessType: 'offline',
        // responseType: 'code',
        // prompt: 'consent',
    });

    return (
        <button onClick={signIn} className="button google-button">
            <div className="google-logo"></div>
            <span className="buttonText">Sign in with Google</span>
        </button>
    );
}

export default Login;