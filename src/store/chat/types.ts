import { UserStatus } from "../../shared/components/avatar";

export interface IRecentMessage {
    id: string;
    name: string;
    profileUrl?: string;
    unReadCount: number;
    status?: UserStatus;
    lastMessage: {
        lastMessage: string;
        lastUpdated: string;
    }
}

export interface IUserContext {
    id: string | null;
    name: string;
    messages: Array<any>;
}

export interface IChatState {
    isRecentMessageLoading: boolean;
    recentMessages: Array<IRecentMessage>,
    currentContext: IUserContext;
}

export const ACTIONS = {
    START_RECENT_MESSAGE_FETCH: 'START_RECENT_MESSAGE_FETCH',
    SUCCESS_RECENT_MESSAGE_FETCH: 'SUCCESS_RECENT_MESSAGE_FETCH',
    ERROR_RECENT_MESSAGE_FETCH: 'SUCCESS_RECENT_MESSAGE_FETCH',
    UPDATE_RECENT_MESSAGE: 'UPDATE_RECENT_MESSAGE'
}

export interface IStartRecentMessageFetchAction {
    type: typeof ACTIONS.START_RECENT_MESSAGE_FETCH;
    payload: boolean;
}

export interface IUpdateMessageAction {
    type: typeof ACTIONS.UPDATE_RECENT_MESSAGE,
    payload: IRecentMessage
}

export interface ISuccessRecentMessageFetchAction {
    type: typeof ACTIONS.SUCCESS_RECENT_MESSAGE_FETCH;
    payload: Array<any>;
}

export interface IErrorRecentMessageFetchAction {
    type: typeof ACTIONS.ERROR_RECENT_MESSAGE_FETCH;
    payload: any;
}

export type IChatActionTypes = IStartRecentMessageFetchAction | ISuccessRecentMessageFetchAction |
    IErrorRecentMessageFetchAction | IUpdateMessageAction;

export type IChatDispatchType = (arg: IChatActionTypes) => IChatActionTypes;