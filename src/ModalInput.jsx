import React, { useState } from 'react';
import { forwardRef } from 'react/cjs/react.production.min';

const ModalInp = forwardRef((props, ref) =>{
    const [val ,setVal] = useState('');
    const changeValHandler = (e) =>{
        setVal(e.target.value)
    }
    return(
        <>
            <label className="lbl">{props.label}</label> <input className="inp" value={val} ref={ref} placeholder={props.placeholder} type="text" onChange={changeValHandler} />
        </>
    )
})

export default ModalInp;