import React, {useState} from 'react'
import Affairs from './Affairs'
import s from "./HW2.module.css";

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any

export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}

export type FilterType = 'all' | AffairPriorityType


function HW2() {
    let [affairs, setAffairs] = useState<Array<AffairType>>([ // need to fix any
        {_id: 1, name: 'React', priority: 'high'},
        {_id: 2, name: 'football', priority: 'low'},
        {_id: 3, name: 'games', priority: 'low'},
        {_id: 4, name: 'work', priority: 'high'},
        {_id: 5, name: 'html & css', priority: 'middle'},
    ])

    let [filter, setFilter] = useState<FilterType>('all')

    function deleteAffair(_id: number) {
        let filteredAffairs = affairs.filter(a => a._id != _id)
        setAffairs(filteredAffairs);
    }

    function filterAffairs(value: FilterType) {
        setFilter(value);
    }

    let affairsForTodoList = affairs;

    if (filter === "high") {
        affairsForTodoList = affairs.filter(a => a.priority === "high");
    }
    if (filter === "middle") {
        affairsForTodoList = affairs.filter(a => a.priority === "middle");
    }
    if (filter === "low") {
        affairsForTodoList = affairs.filter(a => a.priority === "low");
    }

    return (
        <div className={s.hw2}>
            <hr/>
            Homework №2
            <hr/>
            <Affairs
                data={affairsForTodoList}
                setFilter={filterAffairs}
                deleteAffairCallback={deleteAffair}
            />

            <hr/>
        </div>
    )
}

export default HW2
