import React from "react";
import { Fragment } from "react";

const Login = () => {
    return (
        <Fragment>
            <form>
                <input name="user_name"/>
                <input name="password"/>

                <button>Login</button>
            </form>
        </Fragment>
    );
};

export default Login;
