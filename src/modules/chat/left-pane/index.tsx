import React, { Fragment, useEffect } from 'react';
import Avatar, { UserStatus } from '../../../shared/components/avatar';
import './left-pane.scss';
import RecentMessage from '../recent-message';
import DropDown from '../../../shared/components/dropdown';
import DropDownTrigger from '../../../shared/components/dropdown/trigger';
import DropDownList from '../../../shared/components/dropdown/list';
import DropDownItem from '../../../shared/components/dropdown/item';
import Logout from '../../auth/logout';
import { connect } from 'react-redux';
import { IStore } from '../../../store/types';
import { FetchMessageDispatcher } from './types';
import { fetchRecentMessage } from '../../../store/chat/action';
import { IAuthState } from '../../../store/auth/types';

interface LeftPaneProps {
    onSelect?: () => void;
    auth: IAuthState;
    recentMessages: Array<any>;
    fetchRecentMessage: () => any
}

const getAvatarCharacters = (name: string): string => {
    if (name) {
        const nameList = name.split(' ');
    
        return `${nameList[0][0]}${nameList[1][0]}`.toUpperCase();
    } else {
        return '';
    }
};

const LeftPane = (props: LeftPaneProps) => {

    const onMessageSelect = (): void => {
        props.onSelect && props.onSelect();
    };

    const avatarCharacter = getAvatarCharacters(props.auth.name as string);

    useEffect(() => {
        props.fetchRecentMessage();
    }, []);


    return (
        <div className='left-pane'>
            <div className='chat-header'>
                <div className='logo-wrapper'>
                    <Avatar name={avatarCharacter} status={UserStatus.Online} />
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
                {
                    (!props.recentMessages || !props.recentMessages.length)
                        ? <>No recent messages</>
                        : (
                            props.recentMessages.map((message) => {
                                return (
                                    <RecentMessage
                                        key={message.id}
                                        isSelected={false}
                                        onSelect={onMessageSelect}
                                        name={message.name}
                                        status={message.status}
                                        lastMessage={message.lastMessage.lastMessage}
                                        unReadCount={message.unReadCount}
                                        lastMessageTime={message.lastMessage.lastUpdated}
                                    />
                                );
                            })
                        )
                }
            </div>
        </div>
    );
};

const mapStateToProps = (store: IStore) => {
    return { auth: store.auth, recentMessages: store.chat.recentMessages }
};

const mapDispatchToProps = (dispatch: FetchMessageDispatcher) => ({
    fetchRecentMessage: () => dispatch(fetchRecentMessage())
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftPane);
