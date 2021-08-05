import React from 'react'
import s from './Time.module.css';

type TimeType = {
    time: string
}

function Time(props: TimeType) {
    return (
        <div className={s.time}>
            {props.time}
        </div>
    )
}

export default Time
