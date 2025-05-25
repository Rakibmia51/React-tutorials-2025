import React from 'react'



 function EVENT_BUBBLING_STOP_PROPAGATION() {

    const handleParentClick = (event)=>{
        console.log('parent event: ', event)
    }
    const handleChildClick = (event)=>{
        event.stopPropagation() // this is importent for Event Bubbling
        console.log('child event: ', event);
    }

  return (
    <div className='parent' onClick={handleParentClick}>
        <h1>Welcome Everyone</h1>
        <button onClick={handleChildClick}>+</button>
    </div>
  )
}
export default EVENT_BUBBLING_STOP_PROPAGATION