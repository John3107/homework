import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import {v1} from "uuid";
import {useDispatch} from "react-redux";
import {themeAC} from "../../../h12/bll/themeReducer";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const dispatch = useDispatch()

    const mappedOptions: any[] = options.map((o) => {
        return <option key={o}>{o}</option>
    })

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
        dispatch(themeAC((e.currentTarget.value)))
    }

    return (
        <select key={v1()} value={value} onChange={onChangeCallback}

                {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
