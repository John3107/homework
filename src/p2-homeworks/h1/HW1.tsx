import React from 'react'
import Message from "./Message";
import Avatar from "./tests/componients/Avatar/Avatar";


const messageData = {
    avatar: 'https://kikimoraki.ru/wp-content/uploads/2020/01/maska-spanch-bob-v-instagrame-kak-najti-takuyu-2.png',
    name: 'Вася',
    message: 'Что там по задачке от Игната?',
    time: '22:00'
}


function HW1() {
    return (
        <div>
            <hr/>
            <hr/>
            Homework №1
            <hr/>
            <Message
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <Avatar avatar={<img src={messageData.avatar}/>}/>
            <hr/>
        </div>
    )
}

export default HW1
