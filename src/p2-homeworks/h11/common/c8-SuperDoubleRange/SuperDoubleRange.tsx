import React from 'react'
import Slider from "@material-ui/core/Slider";
import {makeStyles} from "@material-ui/core/styles";

type SuperDoubleRangePropsType = {
    value: number[]
    setValue: (value: number[]) => void
    disRange: boolean
}

export const SuperDoubleRange = (props: SuperDoubleRangePropsType) => {

    const useStyles = makeStyles({
        root: {
            width: 300,
        },
    });


    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
        let newValueAsArr = newValue as number[]
        if (newValueAsArr[0] < props.value[1] - 2) {
            props.setValue(newValueAsArr)
        }
    }

    return (
        <>
            <div className={classes.root}>
                <Slider
                    disabled={props.disRange}
                    style={{marginTop: '25px'}}
                    value={props.disRange ? [NaN, NaN] : props.value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                />
            </div>
        </>
    )
}

