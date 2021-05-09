import { APP_ROUTE } from '../../config';
import { getRequest } from '../../shared/utils/http';
import { ACTIONS, IChatDispatchType, IRecentMessage } from './types';

export const fetchRecentMessage = () => (dispatch: IChatDispatchType) => {
    dispatch({
        type: ACTIONS.START_RECENT_MESSAGE_FETCH,
        payload: true
    });

    getRequest(`${APP_ROUTE}/room`, { addAuth: true })
    .then((rooms: Array<any>) => {
        dispatch({
            type: ACTIONS.SUCCESS_RECENT_MESSAGE_FETCH,
            payload: rooms.length ? [...rooms] : []
        });
    })
    .catch(() => {
        dispatch({
            type: ACTIONS.SUCCESS_RECENT_MESSAGE_FETCH,
            payload: []
        });
    });
};

export const addGroup = (message: IRecentMessage) => (dispatch: IChatDispatchType) => {
    dispatch({
        type: ACTIONS.START_RECENT_MESSAGE_FETCH,
        payload: message
    });
};
