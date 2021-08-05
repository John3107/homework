import React from 'react';
import Name from "./tests/componients/Name/Name";
import NewMessage from "./tests/componients/NewMessage/NewMessage";
import Time from "./tests/componients/Time/Time";
import s from './Message.module.css';

type MessageType = {
    time: string;
    message: string;
    name: string;
}


function Message(props: MessageType) {
    return (
        <div className={s.message}>

            <Name name={props.name}/>
            <NewMessage message={props.message}/>
            <Time time={props.time}/>
        </div>
    )
}

export default Message
