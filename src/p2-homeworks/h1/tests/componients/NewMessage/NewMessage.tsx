import React from 'react'
import s from './NewMessage.module.css';

type NewMessageType = {
    message: string
}

function NewMessage(props: NewMessageType) {
    return (
        <div className={s.new_message}>
            {props.message}
        </div>
    )
}

export default NewMessage
