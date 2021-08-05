import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.dropdown}>
            <button className={s.dropbtn}>Dropdown</button>
            <div className={s.dropdownContent}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.preJunior}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.junior}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.juniorPlus}>junior+</NavLink>
        </div>
        </div>
    )
}

export default Header
