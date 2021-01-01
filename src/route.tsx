import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loader from './shared/components/loader';
import PrivateRoute from './shared/components/private-route';
import { AuthStatus, IAuthState } from './store/auth/types';
import { IStore } from './store/types';

const LoginComponent = lazy(() => import(`./modules/auth/login`))
const ChatComponent = lazy(() => import(`./modules/chat`));

interface Props {}

class RouteComponent extends Component<IAuthState | Readonly<Props>, {}>  {

    constructor(props: IAuthState | Readonly<Props> | Readonly<IAuthState> | Readonly<Readonly<Props>>) {
        super(props);
    }

    render() {
        return (
            <Suspense fallback={<Loader />}>
                { ((this.props as IAuthState).authStatus === AuthStatus.LoginSuccess) ? <Redirect to="/chat" /> : null }
                { ((this.props as IAuthState).authStatus === AuthStatus.LoggedOut) ? <Redirect to="/auth" /> : null }
                <Switch>
                    <Route exact path='/' component={ LoginComponent } />
                    <Route exact path='/auth' component={ LoginComponent } />
                    <PrivateRoute exact path='/chat' component={ ChatComponent } />
                </Switch>
            </Suspense>
        );
    }
}

const mapStateToProps = (store: IStore): IAuthState => ( { ...store.auth });
  
export default connect(mapStateToProps)(RouteComponent);
