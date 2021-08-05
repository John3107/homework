import React, {useState, MouseEventHandler, KeyboardEvent, ChangeEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

function GreetingContainer(props: GreetingContainerPropsType) {

    const [name, setName] = useState<string>("")
    const [error, setError] = useState<string>("")


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value
        if (inputValue) {
            setName(inputValue)
            setError("")
        } else {
            setName("")
            setError("Write your name!")
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13 && name.trim() !== "") {
            props.addUserCallback(name)
            alert(`Hello ${name}!`)
            setName("")
        } else {
            setError("Write your name!")
            return
        }
    }
    const addUser: MouseEventHandler<HTMLButtonElement> = () => {
        if (name.trim() !== "") {
            props.addUserCallback(name)
            alert(`Hello ${name}!`)
            setName("")
        } else {
            setError("Write your name!")
            return
        }
    }
    const totalUsers = props.users.length


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}
        />
    )
}

export default GreetingContainer;
