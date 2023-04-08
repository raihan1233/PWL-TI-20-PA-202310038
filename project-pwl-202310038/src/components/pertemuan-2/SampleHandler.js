import React, { useState } from 'react'

export default function SampleHandler() {
    const [isToogle, setIsToogle] = useState(false);
    const handlerClick = () => {
        setIsToogle((!isToogle) ? true : false);
    }
    return (
        <div style={{margin:"0 auto" , padding:"20px"}}>
            <button type='button' onClick={handlerClick}>
                {(isToogle) ? "ON" : "OFF"}
            </button>
            <span style={{padding:11}}>or</span>
            <button type='button' onClick={()=>handlerClick()}>
                {(!isToogle) ? "ON" : "OFF"}
            </button>
        </div>
    )
}
