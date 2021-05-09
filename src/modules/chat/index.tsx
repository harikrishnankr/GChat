import React, { useState } from 'react';
import LeftPane from './left-pane';
import Room from './room';
import './chat.scss';
import CurrentAvatar from '../../shared/components/current-avatar';
import { AvatarSize } from '../../shared/components/avatar';
import { IStore } from '../../store/types';
import { connect } from 'react-redux';
import { IAuthState } from '../../store/auth/types';
import { SocketProvider } from '../../shared/context/socket';

interface ChatComponentProps {
    auth?: IAuthState;
}

const Chat = (props: ChatComponentProps) => {
    const [isAnyChatSelected, setChatView] = useState(false);
    const [selectedChat, setSelectedChat] = useState();

    const selectChat = (message: any) => {
        setChatView(true);
        setSelectedChat(message);
    };

    return (
        <SocketProvider>
            <div className={`chat-wrapper ${isAnyChatSelected ? 'is-chat-view' : ''}`}>
                <div className='left'>
                    <LeftPane onSelect={(message) => selectChat(message)}/>
                </div>
                <div className='right'>
                    { isAnyChatSelected ?
                        <Room
                            goBack={() => setChatView(false)}
                            chat={selectedChat}
                        /> : (
                            <>
                                <div className='empty-placeholder'>
                                    <div>
                                        <CurrentAvatar size={AvatarSize.Large}/>
                                    </div>
                                    <div className='message'>
                                        <div className='welcome'>Welcome!</div>
                                        <div className='name'>{ props?.auth?.name }</div>
                                    </div>
                                </div>
                                <div className='email-message'>You are signed in as <i>{props?.auth?.email}</i></div>
                            </>
                        )
                    }
                </div>
            </div>
        </SocketProvider>
    );
};
const mapStateToProps = (store: IStore) => {
    return {
        auth: store.auth
    }
};

export default connect(mapStateToProps, undefined)(Chat)
