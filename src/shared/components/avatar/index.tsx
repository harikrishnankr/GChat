import React, { Fragment } from 'react';
import './avatar.scss';

export enum UserStatus {
    Online = 1,
    Away
}

interface AvatarProps {
    name: string;
    imageUrl?: string;
    status?: number;
}

const Avatar: React.FunctionComponent<AvatarProps> = (props) => {
    return (
        <Fragment>
            { props.name ? (
                <div className='avatar'>
                    {props.name}
                    <div className={`indicator ${props.status === UserStatus.Online ? 'online' : 'away'}`}></div>
                </div>
            ): null }
            { props.imageUrl ? <img src={props.imageUrl} /> : null}
        </Fragment>
    );
};

export default Avatar;