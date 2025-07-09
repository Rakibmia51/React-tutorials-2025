import React from 'react'

function Component4({users}) {
  return (
    <div>
        <h3>Component 4: User List</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              ID: {user.id}, Name: {user.name}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Component4