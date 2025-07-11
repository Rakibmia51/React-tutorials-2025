import React from 'react'
import User from './User'

function Users({users,handleDeleteUser}) {
  return (
    <section className='users'>
        {users.map(user=> <User key={user.id} user={user} handleDeleteUser={handleDeleteUser}/>)}
    </section>
  )
}

export default Users