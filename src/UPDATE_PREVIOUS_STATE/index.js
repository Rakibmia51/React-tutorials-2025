import React,{useState} from 'react'

 function UPDATE_PREVIOUS_STATE() {
    const [count, setCount] = useState(0)

  const  handleIncrement = ()=>{
            setCount((prevCount)=>prevCount + 1)
            setCount((prevCount)=>prevCount + 1)
            setCount((prevCount)=>prevCount + 1)
    }

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleIncrement}>+</button>
    </div>
  )
}
export default UPDATE_PREVIOUS_STATE