import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


type SuperRangePropsType = {
    value: number[]
    setValue: (value: number[]) => void
    disRange: boolean
};

export const SuperRange = (props: SuperRangePropsType) => {


    const useStyles = makeStyles({
        root: {
            width: 300,
        },
    });


    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
        let currentValue = [...props.value]
        if (typeof newValue === "number" && newValue < props.value[1]) {
            props.setValue([currentValue[0] = newValue, currentValue[1]] as number[])
        }
        if (typeof newValue === "number" && props.disRange) {
            props.setValue([currentValue[0] = newValue, currentValue[1] = newValue] as number[])

        }
    }
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider
                style={{marginTop: '25px'}}
                defaultValue={props.value[0]}
                onChange={handleChange}
                value={props.value[0]}
                aria-labelledby="slider"
                valueLabelDisplay="auto"
            />
        </div>
    );
}

