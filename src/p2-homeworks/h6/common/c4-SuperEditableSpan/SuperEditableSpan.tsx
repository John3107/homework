import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText'
import s from './SuperEditableSpan.module.css'


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

type SuperEditableSpanType = DefaultInputPropsType & {
    onChangeText: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    value: string
    spanProps?: DefaultSpanPropsType
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus,
        onBlur, onChangeText,
        onEnter, value,
        spanProps,

        ...restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

    const onEnterCallback = () => {
        setEditMode(false)

        onEnter && onEnter()
    }
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(false)


        onBlur && onBlur(e)
    }
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true)
        onChangeText(value)

        onDoubleClick && onDoubleClick(e)
    }

    return (
        <>
            {editMode
                ? (
                    <SuperInputText
                        value={value}
                        autoFocus
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}
                        onChangeText={onChangeText}

                        {...restProps}
                    />
                ) : (
                    <div>
                    <span
                        onDoubleClick={onDoubleClickCallBack}
                        className={s.spanClassName}

                        {...restSpanProps}
                    >
                        {children || value}
                    </span>
                        <img
                            src='https://art-nto.ru/800/600/https/www.pikpng.com/pngl/b/198-1984401_png-file-svg-pen-edit-clipart.png'/>
                    </div>
                )
            }
        </>
    )
}

export default SuperEditableSpan
