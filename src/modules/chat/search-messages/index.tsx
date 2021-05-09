import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { APP_ROUTE } from '../../../config';
import { UserStatus } from '../../../shared/components/avatar';
import { getRequest, postRequest } from '../../../shared/utils/http';
import { IAuthState } from '../../../store/auth/types';
import { IStore } from '../../../store/types';
import RecentMessage from '../recent-message';
import './search-messages.scss';

interface SearchMessagesProps {
    closeSearch?: () => void;
    onGroupCreate?: (arg: any) => void;
    recentMessages?: Array<any>;
    auth?: IAuthState;
}

const SearchMessages = (props: SearchMessagesProps) => {
    const [ users, setUsers ] = useState([] as Array<any>);
    const [ isLoading, setLoading ] = useState(false);

    const onGroupCreate = (user: any) => {
        // props.onGroupCreate && props.onGroupCreate({});
        setLoading(true);
        postRequest(`${APP_ROUTE}/room/initiate`, {
            addAuth: true,
            data: {
                name: user.name,
                isGroup: false,
                members: [user.userId]
            }
        })
        .then((result: any) => {
            props?.onGroupCreate && props?.onGroupCreate(result);
        })
        .catch(() => {});
    };

    const closeSearch = () => {
        props.closeSearch && props.closeSearch();
    };

    useEffect(() => {
        setLoading(true);
        getRequest(`${APP_ROUTE}/users`, { addAuth: true })
        .then((users: Array<any>) => {
            setLoading(false);
            setUsers(users.filter((user) => user.userId !== props?.auth?.userId));
        })
        .catch(() => {
            setLoading(false);
            setUsers([]);
        });
    }, []);

    return (
        <div className='search-messages'>
            <div className='message-input-wrapper'>
                <div className='message-input'>
                    <input placeholder='Search Here'/>
                    { isLoading ? <div className="lds-dual-ring"></div> : ''}
                </div>
                <div className='close' onClick={closeSearch}></div>
            </div>
            <div className='message-list'>
                {
                    users.map((user: any) => (
                        <RecentMessage
                            isSelected={false}
                            key={user._id}
                            onSelect={() => onGroupCreate(user)}
                            name={user.name}
                            status={UserStatus.Online}
                            lastMessage=''
                            unReadCount={0}
                            lastMessageTime=''
                        />
                    ))
                }
            </div>
        </div>
    );
};

const mapStateToProps = (store: IStore) => {
    return {
        auth: store.auth
    };
};

export default connect(mapStateToProps, undefined)(SearchMessages);
