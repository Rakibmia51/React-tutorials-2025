import React, { useState } from 'react'
import User from './User'

const Users = () => {

    // const [userName, setUserName] = useState("Rakibul Hasan")
    // const [userId, setUserId] = useState("101")
    
    const [user, setUser] = useState({
      id: 1232022017,
      name: "Rakibul Hasan"
    })
  return (
    <>
        {/* <User userName ={userName} userId ={userId}/> */}
         <User user ={user}/>
    </>
  )
}

export default Users