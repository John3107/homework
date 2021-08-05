import React from 'react'
import s from './Name.module.css';
type NameType = {
    name: string
}


function Name(props: NameType) {
    return (
        <div className={s.name}>
            {props.name}
        </div>
    )
}

export default Name
