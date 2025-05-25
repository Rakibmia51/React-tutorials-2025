import React, { useState } from 'react'

 function HOOKS_USESTATE_2() {


    // Usede to UseState Hook
    const [count, setCount] = useState(0)

    const handelIncrement = ()=>{
        setCount(count +1)
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handelIncrement}>Increment</button>
    </div>
  )
}
export default HOOKS_USESTATE_2