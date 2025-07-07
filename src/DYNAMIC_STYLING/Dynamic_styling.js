import React, { useEffect, useState } from 'react'

import "./style.css"

const Dynamic_styling = () => {

    const [name, setName] = useState("")
    const [validInput, setValidInput] = useState(true);
    const error = true;

    useEffect(()=>{
         if(name.length < 2){
            setValidInput(false)
        }else{
            setValidInput(true)
        }
    },[name])

    const handlechange = (e) =>{
        setName(e.target.value);
        // console.log(name);
    }

  return (
    <div>
        <h1 style={
            {
                color: error ? "red" : "green",
                backgroundColor: error ? "black" : "lightblue"
            }}>Dynamic_styling</h1>


        <input 
            type='text'
            name={name}
            onChange={handlechange}
            // style={{backgroundColor: validInput ? "green" : "red"}}
            // className={`${validInput ? "valid" : "invalid"}`}
               className={`${validInput && "valid"}`}
            />
    </div>
  )
}

export default Dynamic_styling