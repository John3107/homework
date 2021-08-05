import React, {ChangeEvent, KeyboardEvent, MouseEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: MouseEventHandler<HTMLButtonElement>
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string
    totalUsers: number
}


const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler}
) => {
    const inputClass = error ? s.error : s.input
    const buttonClass = error ? s.errorB : s.inputB

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyPress={onKeyPressHandler}
                   className={inputClass}
                   onBlur={setNameCallback}/>
            <button onClick={addUser} className={buttonClass}>add</button>
            <span>{totalUsers}</span>
            <div className={s.textError}>{error}</div>
        </div>
    )
}

export default Greeting
