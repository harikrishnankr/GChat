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
    onSelect?: () => void
}

const RecentMessage: React.FunctionComponent<RecentMessageProps> = (props) => {

    const onSelect = () => {
        props.onSelect && props.onSelect();
    }
    return (
        <div className={`recent-message ${props.isSelected && 'selected'}`} onClick={onSelect}>
            <Avatar name='HK' status={UserStatus.Online} />
            <div className='identity'>
                <div className='name'>{props.name}</div>
                <div className='last-message'>{props.lastMessage}</div>
            </div>
            <div className='space-time'>
                <div className='time'>{props.lastMessageTime}</div>
                { !!props.unReadCount ? <div className='unread-messages'>{props.unReadCount}</div> : null }
            </div>
        </div>
    );
}

export default RecentMessage;
