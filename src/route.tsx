import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from './shared/loader';

const LoginComponent = lazy(() => import(`./modules/auth/login`))
const ChatComponent = lazy(() => import(`./modules/chat`));

class RouteComponent extends Component {
    render() {
        return (
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route exact path="/" component={ LoginComponent } />
                    <Route exact path="/auth" component={ LoginComponent } />
                    <Route exact path="/chat" component={ ChatComponent } />
                </Switch>
            </Suspense>
        );
    }
}
export default RouteComponent;
