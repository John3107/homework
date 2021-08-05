import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    let mappedAffairs = props.data.map(a => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={s.affairs}>
            {mappedAffairs}

            <button className={s.setAll} onClick={setAll}>All</button>
            <button className={s.setHigh} onClick={setHigh}>High</button>
            <button className={s.setMiddle} onClick={setMiddle}>Middle</button>
            <button className={s.setLow} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
