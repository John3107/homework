import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
// types
export type UserType = {
    _id: string
    name: string
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]);
    const addUserCallback = (name: string) => {
        let newUser = {
            _id: v1(),
            name: name
        };
        let newUsers = [newUser, ...users];
        setUsers(newUsers);
    }

    return (
        <div>
            <hr/>
            Homework №3
            <hr/>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            <hr/>
        </div>
    )
}

export default HW3
