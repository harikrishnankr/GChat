import { ACTIONS, IChatActionTypes, IChatState } from './types';

const initialState: IChatState = {
    isRecentMessageLoading: false,
    recentMessages: [],
    currentContext: {
        id: null,
        name: '',
        messages: []
    }
};

export default (state = initialState, action: IChatActionTypes): IChatState => {
    switch (action.type) {
        case ACTIONS.START_RECENT_MESSAGE_FETCH:
            return {
                ...state,
                recentMessages: [],
                isRecentMessageLoading: true
            };
        case ACTIONS.SUCCESS_RECENT_MESSAGE_FETCH:
            return {
                ...state,
                isRecentMessageLoading: false,
                recentMessages: [
                    ...state.recentMessages,
                    ...action.payload
                ]
            };
        case ACTIONS.START_RECENT_MESSAGE_FETCH:
            return {
                ...state,
                isRecentMessageLoading: false,
                recentMessages: [
                    action.payload,
                    ...state.recentMessages
                ]
            }
        default:
            return state;
    }
};
