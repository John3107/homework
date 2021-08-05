import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'


type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        return props.deleteAffairCallback(props.affair._id)
    }

    return <div className={s.affair}>
        <div className={s.name}>{props.affair.name}</div>
        <div className={s.priority}>{props.affair.priority}</div>
        <button className={s.deleteCallback} onClick={deleteCallback}>x</button>
    </div>

}

export default Affair
