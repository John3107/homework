import React, {MouseEvent, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<string>()
    const [time, setTime] = useState<string>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        window.clearTimeout(timerId)
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            let newTime = new Date().toLocaleTimeString('en-GB');
            setTime(newTime)
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
        let newDate = new Date().toLocaleDateString('uk-UA')
        setDate(newDate)
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = time
    const stringDate = date

    const dateShowerForTime = show === true ? '' : s.time
    const dateShowerForButtons = show === true ? s.buttons : s.buttonsOnHover

    return (
        <div className={s.clock}>
            <div className={dateShowerForTime}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}
            <div className={dateShowerForButtons}>
                <SuperButton className={s.start} onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
