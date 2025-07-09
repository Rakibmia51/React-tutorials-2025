import React, { useState } from 'react'
import Users from './components/Users'
import style from './index.css'
import NewUser from './components/NewUser'

function UserManagement() {
    const [users, setUsers] = useState([
        {id: 1, username: "rakib"},
        {id: 2, username: "sakib"}
    ])

    const handleDeleteUser = (id)=>{
        const filteredUsers = users.filter(user=> user.id !== id)
        setUsers(filteredUsers)
    }

    const handleAddNewUser = (NewUser)=>{
        // console.log(user)
        setUsers(prevUsers => [...prevUsers, NewUser])
    }

  return (
    <div>
        <NewUser handleAddNewUser={handleAddNewUser}/><br></br>
        <Users users={users} handleDeleteUser={handleDeleteUser}/>
    </div>
  )
}

export default UserManagement


// CRD - Create, Read, Delete User

// useContext()
// createContext()

// App -> Users -> User 
// App -> NewUser


