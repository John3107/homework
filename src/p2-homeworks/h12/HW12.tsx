import React from "react";
import s from "./HW12.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";


function HW12() {

    const themes = useSelector<AppStoreType, string[]>(state => state.theme)
    const texts = useSelector<AppStoreType, string[]>(state => state.text.text)
    const value = useSelector<AppStoreType, string>(state => state.text.value)

    return (
        <div className={s[themes[0]]}>
            <hr/>
            <hr/>
            <span className={s[value]}>
                Homework №12
                <hr/>
            </span>
            <div className={s.selectAndRadio}>
                <SuperRadio
                    name={'radio'}
                    options={texts}
                    value={value}
                />
                <SuperSelect options={themes}
                             value={themes[0]}
                             className={s.select}
                />
            </div>
            <hr/>
            <hr/>
        </div>
    );
}

export default HW12;
