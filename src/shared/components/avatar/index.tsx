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

const getStatus = (status: number | undefined) => {
    switch (status) {
        case UserStatus.Online:
            return 'online';
        case UserStatus.Away:
            return 'away';
        default:
            return '';
    }
};

const Avatar: React.FunctionComponent<AvatarProps> = (props) => {
    const currentStatus = getStatus(props.status);
    return (
        <Fragment>
            { props.name ? (
                <div className='avatar'>
                    {props.name}
                    { currentStatus ? <div className={`indicator ${currentStatus}`}></div> : null }
                </div>
            ): null }
            { props.imageUrl ? <img src={props.imageUrl} /> : null}
        </Fragment>
    );
};

export default Avatar;