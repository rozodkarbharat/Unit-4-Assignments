import React, { useState } from "react";
  var x=true

const Button1=()=>{
  
if(x){
    style={
        color:"red",

    }
}
if(x===false){
  console.log(x)
        var style={
        color:"green",

    }
}
    
const [counter,setCounter]=useState(0)
if(counter%2===1){
    x=false
}
if(counter%2===0){
    x=true
}

const handleDec=()=>{
  
if(counter>0)

   { setCounter(counter/2)


}
  
}
const handleInc=()=>{
    

setCounter(counter*2)


} 

return (

    <>
    <h1 style={style}>{counter}</h1>
    <button onClick={handleInc}>INC</button>
    <button onClick={handleDec}>Dec</button>
    
    </>

)


}
export default Button1