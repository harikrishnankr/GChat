import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../utils/auth';

const PrivateRoute = ({ component, ...rest } : any) => {
    const RenderComponent = component;
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /auth page
        <Route {...rest} render={props => (
            isLogin() ?
                <RenderComponent {...props} />
            : <Redirect to='/auth' />
        )} />
    );
};

export default PrivateRoute;