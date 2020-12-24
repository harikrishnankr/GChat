import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from './shared/loader';

const LoginComponent = lazy(() => import(`./modules/auth/login`))

class RouteComponent extends Component {
    render() {
        return (
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route exact path="/" component={LoginComponent} />
                </Switch>
            </Suspense>
        );
    }
}
export default RouteComponent;
