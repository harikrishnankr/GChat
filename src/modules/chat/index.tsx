import React from "react";
import { Fragment } from "react";

const Chat = () => {

    const logout = () => {
        console.log('Logout');
    };

    return (
        <Fragment>
            This is Chat page
            <button type="button" onClick={logout}>Logout</button>
        </Fragment>
    );
};

export default Chat;
