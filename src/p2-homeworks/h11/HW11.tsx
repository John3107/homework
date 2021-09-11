import React, {useState} from 'react'
import {SuperRange} from './common/c7-SuperRange/SuperRange'
import {SuperDoubleRange} from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {Switch} from "@material-ui/core";


function HW11() {

    const [value, setValue] = React.useState<number[]>([20, 37])

    const [disRange, setDisRange] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDisRange(event.target.checked);
    }

    return (
        <div>
            Homework №11
            <hr/>
            <SuperRange
                value={value}
                setValue={setValue}
                disRange={disRange}
            />
            <SuperDoubleRange
                value={value}
                setValue={setValue}
                disRange={disRange}
            />
            <Switch
                checked={disRange}
                onChange={handleChange}
                color="primary"
                name="checkedB"
                inputProps={{'aria-label': 'primary checkbox'}}
            />
            <hr/>
            <hr/>
        </div>
    )
}

export default HW11
