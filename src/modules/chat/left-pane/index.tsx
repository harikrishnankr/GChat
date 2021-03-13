import React, { Fragment, useEffect } from 'react';
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
import CurrentAvatar from '../../../shared/components/current-avatar'

interface LeftPaneProps {
    onSelect?: () => void;
    auth: IAuthState;
    recentMessages: Array<any>;
    fetchRecentMessage: () => any;
    isRecentMessageLoading: boolean;
}

const LeftPane = (props: LeftPaneProps) => {

    const onMessageSelect = (): void => {
        props.onSelect && props.onSelect();
    };

    useEffect(() => {
        props.fetchRecentMessage();
    }, []);

    const triggerSearch = () => {

    };

    return (
        <div className='left-pane'>
            <div className='chat-header'>
                <div className='logo-wrapper'>
                    <CurrentAvatar />
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
                <div className='search-box' onClick={triggerSearch}>
                    <div className='search-glass'></div>
                    <div className='placeholder'>People, groups & names</div>
                </div>
            </div>
            <div className='recent-messages'>
                { !props.isRecentMessageLoading ? (
                    (!props.recentMessages || !props.recentMessages.length)
                        ?(
                            <div className='empty-recent-messages'>
                                <div>No recent messages</div>
                                <a onClick={triggerSearch}>Find your friends</a>
                            </div>
                        )
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
                    ) : <div className='recent-message-loading'>Fetching Recent Messages....</div>
                }
            </div>
        </div>
    );
};

const mapStateToProps = (store: IStore) => {
    return {
        auth: store.auth,
        recentMessages: store.chat.recentMessages,
        isRecentMessageLoading: store.chat.isRecentMessageLoading
    }
};

const mapDispatchToProps = (dispatch: FetchMessageDispatcher) => ({
    fetchRecentMessage: () => dispatch(fetchRecentMessage())
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftPane);
