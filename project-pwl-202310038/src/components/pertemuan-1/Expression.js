import React, { useEffect, useState } from 'react'

export default function Expression() {
    
    const today = new Date();
    const [currDate, setCurrDate] = useState(today);

    const countTimer = () =>{
        setCurrDate(new Date());
    }

    useEffect(()=>{
        setInterval(
            () => countTimer(),
            1000
        );
    },[])

    return (
        <div>
            <h1>Today is {currDate.toTimeString()}</h1>
        </div>
    )
}
