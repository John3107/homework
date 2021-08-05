import React, {ElementType} from 'react';
import s from './Avatar.module.css';

type AvatarType = {
    avatar: any
}

function Avatar(props: AvatarType) {
    return (
        <div className={s.avatar}>
            {props.avatar}
        </div>
    )
}

export default Avatar
