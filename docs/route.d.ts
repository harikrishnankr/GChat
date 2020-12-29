import React, { Component } from 'react';
import { IAuthState } from './store/auth/types';
interface Props {
}
declare class RouteComponent extends Component<IAuthState | Readonly<Props>, {}> {
    constructor(props: IAuthState | Readonly<Props> | Readonly<IAuthState> | Readonly<Readonly<Props>>);
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof RouteComponent, Pick<React.ClassAttributes<RouteComponent> & Readonly<Props>, "ref" | "key">>;
export default _default;
