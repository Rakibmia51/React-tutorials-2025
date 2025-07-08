import React, { useState } from 'react'
import Component2 from './Component2';

const usersData = [
  {
    id : 1,
    name : "Rakibul Hasan"
  },
   {
    id : 2,
    name : "Sakibul Hasan"
  }
];

function Component1() {
  const [users, usersState] = useState(usersData);
  return (
    <div>
      <Component2 users={users}/>
    </div>
  )
}

export default Component1