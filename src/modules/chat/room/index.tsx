import React from 'react';
import Avatar, { UserStatus } from '../../../shared/components/avatar';
import './room.scss';

const Room = () => {
    return (
        <div className='room-wrapper'>
            <div className='header'>
                <div className='user-data-wrapper'>
                    <div className='go-back'></div>
                    <div className='user-data'>
                        <Avatar name='HK' status={UserStatus.Online} />
                        <div className='user-name'>Hari Krishnan KR</div>
                    </div>
                </div>
            </div>
            <div className='chat-inbox'></div>
            <div className='chat-input'></div>
        </div>
    );
};

export default Room;