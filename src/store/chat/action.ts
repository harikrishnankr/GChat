import { UserStatus } from '../../shared/components/avatar';
import { ACTIONS, IChatDispatchType } from './types';


export const fetchRecentMessage = () => (dispatch: IChatDispatchType) => {
    dispatch({
        type: ACTIONS.START_RECENT_MESSAGE_FETCH,
        payload: true
    });

    dispatch({
        type: ACTIONS.SUCCESS_RECENT_MESSAGE_FETCH,
        payload: [{
            id: '1231',
            name: 'Anil John',
            profileUrl: '',
            status: UserStatus.Online,
            lastMessage: {
                lastMessage: 'Heloooo!',
                lastUpdated: '10: 34 AM',
            },
            unReadCount: 1
        },{
            id: '1232',
            name: 'Vysakh PR',
            profileUrl: '',
            status: UserStatus.Online,
            lastMessage: {
                lastMessage: 'Heloooo!',
                lastUpdated: '10: 34 AM',
            },
            unReadCount: 2
        },{
            id: '1233',
            name: 'Vishnu Prasad',
            profileUrl: '',
            status: UserStatus.Away,
            lastMessage: {
                lastMessage: 'Heloooo!',
                lastUpdated: '10: 34 AM',
            },
            unReadCount: 0
        }]
    });

};