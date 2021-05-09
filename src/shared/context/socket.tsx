import React from "react";
import { io } from "socket.io-client";
import { APP_ROUTE } from "../../config";

const setSocket = (options?: any) => {
    return io(APP_ROUTE, options ? {
        path: "/chat-server/",
        ...options
    } :  {
        path: "/chat-server/"
    });
};

const socket = setSocket();
const defaultValue = {};
export const SocketContext = React.createContext(defaultValue);

export const SocketProvider = (props: any) => {
    return (
        <SocketContext.Provider value={socket}>
            { props.children }          
        </SocketContext.Provider>
    );
};
