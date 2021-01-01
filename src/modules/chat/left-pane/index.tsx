import React, { Fragment } from 'react';
import Avatar, { UserStatus } from '../../../shared/components/avatar';
import './left-pane.scss';
import RecentMessage from '../recent-message';
import DropDown from '../../../shared/components/dropdown';
import DropDownTrigger from '../../../shared/components/dropdown/trigger';
import DropDownList from '../../../shared/components/dropdown/list';
import DropDownItem from '../../../shared/components/dropdown/item';
import Logout from '../../auth/logout';

interface LeftPaneProps {
    onSelect?: () => void
}

const LeftPane = (props: LeftPaneProps) => {

    const onMessageSelect = () => {
        props.onSelect && props.onSelect();
    };

    return (
        <div className='left-pane'>
            <div className='chat-header'>
                <div className='logo-wrapper'>
                    <Avatar name='HK' status={UserStatus.Online} />
                </div>
                <DropDown>
                    <DropDownTrigger>
                        <a className='menu'></a>
                    </DropDownTrigger>
                    <DropDownList className='right' render={(props: any) => (
                        <Fragment>
                            <DropDownItem onSelect={() => props.closeDropDown()}>
                                <Logout />
                            </DropDownItem>
                        </Fragment>
                    )}></DropDownList>
                </DropDown>
            </div>
            <div className='search-bar'>
                <div className='search-box'>
                    <div className='search-glass'></div>
                    <div className='placeholder'>People, groups & names</div>
                </div>
            </div>
            <div className='recent-messages'>
                <RecentMessage isSelected={true} onSelect={onMessageSelect}/>
                <RecentMessage onSelect={onMessageSelect}/>
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
