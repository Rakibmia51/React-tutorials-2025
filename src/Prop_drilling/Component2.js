import React from 'react'
import Component3 from './Component3'

function Component2({users}) {
  return (
    <div>
        <Component3 users={users}/>
    </div>
  )
}

export default Component2