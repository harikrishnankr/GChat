import React from "react";
import { connect } from "react-redux";
import { IAuthState } from "../../../store/auth/types";
import { IStore } from "../../../store/types";
import { getAvatarCharacters } from "../../utils/helpers";
import Avatar from "../avatar";

interface CurrentAvatarProps {
    auth?: IAuthState;
    size?: number
}

const CurrentAvatar = (props: CurrentAvatarProps) => {
    const avatarCharacter = props.auth ? getAvatarCharacters(props.auth.name as string) : '';

    return (
        <>
            <Avatar name={avatarCharacter} status={props.auth ? props.auth.status : 0} size={props.size} />
        </>
    );
};



const mapStateToProps = (store: IStore) => {
    return {
        auth: store.auth
    }
};

export default connect(mapStateToProps, undefined)(CurrentAvatar);
