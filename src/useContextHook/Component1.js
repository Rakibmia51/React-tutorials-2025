import React, { useState } from 'react'
import Component2 from './Component2';
import { UserContext } from './UserContext';

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

function Component1A() {
  const [users, setUsers] = useState(usersData);
  const [text, setText] = useState("Helo hi");
  return (
    <UserContext.Provider value={{users, text}}>
      <Component2/>
    </UserContext.Provider>
  )
}

export default Component1A

// Global State
// component1 -> component2 -> component3 -> component4 ->