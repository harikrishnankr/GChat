import React, { useEffect, useState } from 'react';
import AutoGrowInput from '../../../shared/components/auto-grow-input';
import Avatar, { UserStatus } from '../../../shared/components/avatar';
import './room.scss';

interface RoomProps {
    goBack?: () => void;
    chat?: any;
    messages?: Array<any>;
}

const Room = (props: RoomProps) => {

    const [inputValue, setInputValue] = useState('');
    const [avatar, setAvatarName] = useState('HK');
    const [messageList] = useState([{
        userId: 1,
        messageId: 1,
        from: 'Hari Krishnan',
        isInComing: true,
        content: 'only one week she done something',
        time: '10:45 AM'
    }, {
        userId: 2,
        messageId: 2,
        from: 'Test',
        isInComing: false,
        content: 'only one week she done something',
        time: '10:45 AM'
    }]);

    const inputUpdated = (value: string) => {
        setInputValue(value);
    };

    const resetInput = () => {
        setInputValue('');
    };

    const sendMessage = () => {
        resetInput();
    };

    useEffect(() => {
        const nameSplit = props?.chat?.name.split(' ');
        nameSplit?.length > 1 ?
            setAvatarName(`${nameSplit[0][0]}${nameSplit[1][0]}`.toUpperCase()) :
            setAvatarName(`${nameSplit[0][0]}${nameSplit[0][1]}`.toUpperCase());
        
    }, [props.chat]);

    return (
        <div className='room-wrapper'>
            <div className='header'>
                <div className='user-data-wrapper'>
                    <div className='go-back' onClick={() => props.goBack && props.goBack()}></div>
                    <div className='user-data'>
                        <Avatar name={avatar} status={UserStatus.Online} />
                        <div className='user-name'>{props?.chat?.name}</div>
                    </div>
                </div>
            </div>
            <div className='chat-inbox'>
                {
                    messageList.map((message) => (
                        <div key={message.messageId} className={'chat-message ' + (message.isInComing ? 'in-coming' : 'out-going')}>
                            {
                                message.isInComing ? (
                                    <div>
                                        <Avatar name={avatar} />
                                    </div>
                                ): null
                            }
                            <div className='message-wrapper'>
                                <div className='name-and-time'>
                                    {message.from}, {message.time}
                                </div>
                                <div className='message-text'>
                                    {message.content}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='chat-input-wrapper'>
                <div className='chat-input'>
                    <AutoGrowInput value={inputValue} onInputUpdate={inputUpdated}/>
                </div>
                <div className='send-button' onClick={sendMessage}></div>
            </div>
        </div>
    );
};

export default Room;