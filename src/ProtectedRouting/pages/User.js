import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'



function User() {

    // const {userid} = useParams()  1st type
    const [searchParams, setSearchParams] = useSearchParams();

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

   const handleSubmit = (e)=>{
        e.preventDefault();
        setSearchParams({name: name, age: age})
   }

  return (
    <div style={{textAlign:"center", margin:"2rem"}}>User
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={(e)=>{
                setName(e.target.value)
            }} placeholder='name' /><div>  </div><br/>

             <input type='text' value={age} onChange={(e)=>{
                setAge(e.target.value)
            }} placeholder='age'/>

            <button type='submit'>Find</button>
        </form>


        {/* <h1>{userid}</h1> 1st type */} 
        {/* <h1>{searchParams.get("id")}</h1>
        <h1>{searchParams.get("age")}</h1>
        <h1>{searchParams.get("name")}</h1> */}
    </div>
  )
}

export default User