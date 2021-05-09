import React, { Fragment, useContext, useEffect, useState } from 'react';
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
import { addGroup, fetchRecentMessage } from '../../../store/chat/action';
import { IAuthState } from '../../../store/auth/types';
import CurrentAvatar from '../../../shared/components/current-avatar'
import SearchMessages from '../search-messages';
import { Socket } from 'socket.io-client';
import { SocketContext } from '../../../shared/context/socket';
import { MESSAGE_TRIGGERS } from '../../../config';

interface LeftPaneProps {
    onSelect?: (message: any) => void;
    auth: IAuthState;
    recentMessages: Array<any>;
    fetchRecentMessage: () => any;
    isRecentMessageLoading: boolean;
}

const LeftPane = (props: LeftPaneProps) => {
    const socket: Socket | Object = useContext(SocketContext);
    const [isSearching, setSearching] = useState(false);

    useEffect(() => {
        (socket as Socket)?.emit(MESSAGE_TRIGGERS.IDENTITY, props?.auth?.userId);
        (socket as Socket).on(MESSAGE_TRIGGERS.GROUP_CREATED, (group) => {
            addGroup(group);
        });
    }, [socket]);

    const onMessageSelect = (message: any): void => {
        props.onSelect && props.onSelect(message);
    };

    const groupCreated = () => {
        // props.fetchRecentMessage();
        closeSearch();
    }

    useEffect(() => {
        props.fetchRecentMessage();
    }, []);

    const triggerSearch = () => {
        setSearching(true);
    };

    const closeSearch = () => {
        setSearching(false);
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
            { isSearching ? <SearchMessages
                closeSearch={ closeSearch }
                recentMessages={ props.recentMessages }
                onGroupCreate= { groupCreated }
            /> : (
                <>
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
                                                key={message.roomId}
                                                isSelected={false}
                                                onSelect={() => onMessageSelect(message)}
                                                name={message.name}
                                                status={message.status}
                                                lastMessage=""
                                                unReadCount={message.unReadCount}
                                                lastMessageTime=""
                                            />
                                        );
                                    })
                                )
                            ) : <div className='recent-message-loading'>Fetching Recent Messages....</div>
                        }
                    </div>
                </>
                )
            }
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
