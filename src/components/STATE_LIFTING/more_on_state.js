import React from 'react'

 function MORE_ON_STATE(props) {

    const childData = {
        name: "Rakibul Hasan",
        age : 27,
        country: "Bangladesh"
    }
    props.data(childData)

    
  return (
    <div>more_on_state</div>
  )
}
export default MORE_ON_STATE