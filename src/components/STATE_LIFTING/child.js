import React from 'react'

 function CHILD(props) {
   const data = "I am from child component"
    props.onChildData(data)

  return (
    <div>
        <p>I am child component</p>
        <p>{props.dataParent}</p>
    </div>
  )
}
export default CHILD