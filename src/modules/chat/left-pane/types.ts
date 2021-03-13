import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type FetchMessageDispatcher = ThunkDispatch<{}, undefined, Action>;
