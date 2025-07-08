import React, { useState } from 'react'
import Component2 from './Component2';

const users = [
  {
    id : 1,
    name : "Rakibul Hasan"
  },
   {
    id : 2,
    name : "Sakibul Hasan"
  }
]

function Component1() {
  const [user, userState] = useState({id: 101, name: "Rakibul Hasan"});
  return (
    <div>
      <Component2 user={user}/>
    </div>
  )
}

export default Component1