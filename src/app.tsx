import React from "react";
import { render } from "react-dom";
import { HashRouter as Router } from 'react-router-dom';
import RouteComponent from "./route";

render(
    <Router>
        <RouteComponent/>
    </Router>,
    document.getElementById('root')
);
