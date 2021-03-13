import { IAuthState } from './auth/types';
import { IChatState } from './chat/types';

export interface IStore {
    auth: IAuthState;
    chat: IChatState;
}
