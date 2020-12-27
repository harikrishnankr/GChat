import React from 'react';
import Avatar, { UserStatus } from '../../../shared/components/avatar';
import './message.scss'

interface RecentMessageProps {
    name?: string;
    status?: UserStatus;
    lastMessage?: string;
    lastMessageTime?: string;
    unReadCount?: number;
    isSelected?: boolean;
}

const RecentMessage: React.FunctionComponent<RecentMessageProps> = (props) => {
    return (
        <div className={`message ${props.isSelected && 'selected'}`}>
            <Avatar name='HK' status={UserStatus.Online} />
            <div className='identity'>
                <div className='name'>Hari Krishnan</div>
                <div className='last-message'>Hellooo!!</div>
            </div>
            <div className='space-time'>
                <div className='time'>10:34 AM</div>
                <div className='unread-messages'>2</div>
            </div>
        </div>
    );
}

export default RecentMessage;
