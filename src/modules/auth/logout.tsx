import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { G_AUTH_CLIENT_ID } from '../../config';
import './login.scss';

const Logout = () => {
    const onLogoutSuccess = () => {
        console.log('Logged out Success');
    };

    const onFailure = () => {
        console.log('Handle failure cases');
    };

    const { signOut } = useGoogleLogout({
        clientId: G_AUTH_CLIENT_ID,
        onLogoutSuccess,
        onFailure,
    });

    return (
        <button onClick={signOut} className="button google-button">
            <div className="google-logo"></div>

            <span className="buttonText">Sign out</span>
        </button>
    );
}

export default Logout;