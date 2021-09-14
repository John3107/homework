import React from "react";
import s from "./HW12.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {initState} from "./bll/textReducer";


function HW12() {

    const themes = useSelector<AppStoreType, string[]>(state => state.theme)
    const texts = useSelector<AppStoreType, string[]>(state => state.text)

    return (
        <div className={s[themes[0]]}>
            <hr/>
            <span className={s[themes + '-text']}>
                Homework №12
            </span>
            <div>
                <SuperSelect options={themes}
                             value={themes[0]}
                />
                <SuperRadio
                    name={'radio'}
                    options={initState}
                    value={texts}
                />
            </div>
            <hr/>
            <hr/>
        </div>
    );
}

export default HW12;
