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
            <div className='chat-inbox'>
                <div className='chat-message in-coming'>
                    <div>
                        <Avatar name='HK' />
                    </div>
                    <div className='message-wrapper'>
                        <div className='name-and-time'>
                            Hari Krishnan, 10:45 AM
                        </div>
                        <div className='message-text'>
                            and sir informed her to learn react as we are into new technology and she even didnt go thru it.
                        </div>
                        <div className='message-text'>
                            only one week she done something
                        </div>
                        <div className='message-text'>
                            restrictions ok. we can understand. but if she is planning to rejoin then she must learn something
                        </div>
                    </div>
                </div>
                <div className='chat-message out-going'>
                    <div className='message-wrapper'>
                        <div className='name-and-time'>
                            Hari Krishnan, 10:45 AM
                        </div>
                        <div className='message-text'>
                            yes but the problem is learning never stops but the real hands on experience is what we need  
                        </div>
                        <div className='message-text'>
                            we gave her some time to learn right 
                        </div>
                    </div>
                </div>
            </div>
            <div className='chat-input'></div>
        </div>
    );
};

export default Room;