import React, {useContext} from 'react'
import { UserContext } from './UserContext'
function Component4() {

  const {users, text} = useContext(UserContext)


  return (
    <div>
       
        <h3>Component 4: User List</h3>
        <h1>{text}</h1>
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