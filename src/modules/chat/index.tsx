import React from 'react';
// import Logout from '../auth/logout';
import './chat.scss';
import LeftPane from './left-pane';
import Room from './room';

const Chat = () => {
    return (
        <div className='chat-wrapper'>
            <LeftPane />
            <Room />
            {/* <Logout /> */}
        </div>
    );
};

export default Chat;
