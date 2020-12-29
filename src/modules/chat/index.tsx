import React, { useState } from 'react';
// import Logout from '../auth/logout';
import './chat.scss';
import LeftPane from './left-pane';
import Room from './room';

const Chat = () => {

    const [isChatView, setChatView] = useState(false);

    return (
        <div className={`chat-wrapper ${isChatView ? 'is-chat-view' : ''}`}>
            <div className='left'>
                <LeftPane onSelect={() => setChatView(true)}/>
            </div>
            <div className='right'>
                <Room goBack={() => setChatView(false)}/>
            </div>
            {/* <Logout /> */}
        </div>
    );
};

export default Chat;
