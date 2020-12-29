import React from 'react';
import './avatar.scss';
export declare enum UserStatus {
    Online = 1,
    Away = 2
}
interface AvatarProps {
    name: string;
    imageUrl?: string;
    status?: number;
}
declare const Avatar: React.FunctionComponent<AvatarProps>;
export default Avatar;
