import React from 'react';
import Avatar, { UserStatus } from '../../../shared/components/avatar';
import './left-pane.scss';
import RecentMessage from '../recent-message';

const LeftPane = () => {
    return (
        <div className='left-pane'>
            <div className='chat-header'>
                <div className='logo-wrapper'>
                    <Avatar name='HK' status={UserStatus.Online} />
                </div>
                <a className='menu'></a>
            </div>
            <div className='search-bar'>
                <div className='search-box'>
                    <div className='search-glass'></div>
                    <div className='placeholder'>People, groups & names</div>
                </div>
            </div>
            <div className='recent-messages'>
                <RecentMessage isSelected={true} />
                <RecentMessage />
                <RecentMessage />
                <RecentMessage />
                <RecentMessage />
                <RecentMessage />
                <RecentMessage />
                <RecentMessage />
                <RecentMessage />
                <RecentMessage />
                <RecentMessage />
                <RecentMessage />
                <RecentMessage />
                <RecentMessage />
                <RecentMessage />
                <RecentMessage />
                <RecentMessage />
                <RecentMessage />
                <RecentMessage />
                <RecentMessage />
            </div>
        </div>
    );
};

export default LeftPane;
