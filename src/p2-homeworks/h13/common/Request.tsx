import React, {useState} from "react";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestsAPI} from "./RequestsAPI";


export const Request = () => {
    const [checked, setChecked] = useState(false)
    const [requestData, setRequestData] = useState()
    const success = checked
    const requestClickHandler = () => {
        requestsAPI.createRequest(success)
            .then((res) => {
                setRequestData(res.data.info);
            })
            .catch((err) => {
                setRequestData(err.message)
            })
    }


    return <div>
        <div><SuperCheckbox onChangeChecked={setChecked}
                            checked={checked}/></div>
        <div>{requestData}</div>
        <div><SuperButton onClick={requestClickHandler}>Request</SuperButton></div>
    </div>
}