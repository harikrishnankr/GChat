import React, { Fragment } from 'react';
import './avatar.scss';

export enum UserStatus {
    Online = 1,
    Away,
    Offline
}

export enum AvatarSize {
    Small = 1,
    Medium,
    Large
}

interface AvatarProps {
    name: string;
    imageUrl?: string;
    status?: number;
    size?: number;
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
    const avatarClass = `avatar${(props.size && props.size !== AvatarSize.Small) ? ' avatar-'+ props.size : ''}`

    return (
        <Fragment>
            { props.name ? (
                <div className={avatarClass}>
                    {props.name}
                    { currentStatus ? <div className={`indicator ${currentStatus}`}></div> : null }
                </div>
            ): null }
            { props.imageUrl ? <img src={props.imageUrl} /> : null}
        </Fragment>
    );
};

export default Avatar;