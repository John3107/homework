import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import preloader from '../../images/Ellipsis-1s-200px (1).svg'
import s from './HW10.module.css'

function HW10() {
    const dispatch = useDispatch()

    const loading = useSelector<AppStoreType>(state => state.loading.loading)

    const loadingIsFalse = () => {
        dispatch(loadingAC(false))
    }

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(loadingIsFalse, 2000)
    };

    return (
        <div>
            Homework №10
            <hr/>
            {loading
                ? (
                    <div><img className={s.preloader} src={preloader}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            <hr/>
        </div>
    )
}

export default HW10
