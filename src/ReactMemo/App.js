import React, { useState } from 'react'
import Message from './components/Message';

const Memo = () => {
    const [count, setCount] = useState(0);
    console.log("App rendering")
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>{setCount((count)=> count +1)}}>Increment</button>

        <Message numberOfMessages={count}/>
    </div>
  )
}

export default Memo