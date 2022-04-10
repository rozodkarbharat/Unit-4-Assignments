import React, { useState } from "react"



const Button=()=>{
    const [count,setCount]=useState(0)

    const handleDec=()=>{
        setCount(count-1)
    }
    const handleInc=()=>{
  setCount(count+1)
    }
    
    return (
        <>
        <h1>{count}</h1>
        <button onClick={handleInc}>Inc</button>
        <button onClick={handleDec}>Dec</button>
        </>
    )
}

export default Button