import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const LoginComponent = lazy(() => import(`./modules/auth/login`))

class RouteComponent extends Component {
    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={LoginComponent} />
                </Switch>
            </Suspense>
        );
    }
}
export default RouteComponent;
