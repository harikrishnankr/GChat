import React from 'react';
import { UserStatus } from '../../../shared/components/avatar';
import './message.scss';
interface RecentMessageProps {
    name?: string;
    status?: UserStatus;
    lastMessage?: string;
    lastMessageTime?: string;
    unReadCount?: number;
    isSelected?: boolean;
    onSelect?: () => void;
}
declare const RecentMessage: React.FunctionComponent<RecentMessageProps>;
export default RecentMessage;
