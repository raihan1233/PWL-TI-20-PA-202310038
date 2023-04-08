import React from 'react'

export default function Attributes() {
    const today = new Date().toTimeString();
    function myName() {
        return "Febry D F";
    }
    const CurrCourse = () =>{
        return <h3 style={{fontSize:"40px", color:"green"}}>Pemograman Web Lanjut</h3>;
    }
    const bgBlue = {
        backgroundColor:"blue",
        color:"white"
    }
    return (
        <div>
            <h1 style={bgBlue}>Today is {today}</h1>
            <h2>My name is <span className="red">{myName()}</span></h2>
            {CurrCourse()}
        </div>
    )
}
