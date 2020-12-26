import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import RouteComponent from './route';
import store from './store'

render(
    <Provider store={ store }>
        <Router>
            <RouteComponent/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
