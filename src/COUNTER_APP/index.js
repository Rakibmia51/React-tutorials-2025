import React,{useState} from 'react'

 function COUNTER_APP() {

    const [count, setCount] = useState(0)

    const handleIncrement =()=>{
        setCount((PrevCount)=>PrevCount + 1)
    }
     const handleDecrement =()=>{
        setCount((PrevCount)=>PrevCount - 1)
    }

    const reset =()=>{
         setCount((PrevCount)=>PrevCount = 0)
    }

  return (
    <div className='div'>
        <h2 className='header'>Counter App</h2>
        <div className='div2'>
            <h3 className=''>Count : {count}</h3>
            <button onClick={handleIncrement} disabled ={count ===5 ? true : false}>+</button>
            <button onClick={handleDecrement} disabled ={count ===-5 ? true : false}>-</button>
            <button onClick={reset}>0</button>
        </div>
    </div>
  )
}
export default COUNTER_APP