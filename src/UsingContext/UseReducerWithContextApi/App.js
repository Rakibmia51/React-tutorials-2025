import React from 'react'

import Users from './components/Users'
import style from './index.css'
import NewUser from './components/NewUser'
import UsersProvider from './context/UserContext';


function UseReducerWithContextApi() {
  
  return (
    <UsersProvider>
        <div>
            <NewUser/><br></br>
            <Users />
        </div>
    </UsersProvider>
  );
};

export default UseReducerWithContextApi


// CRD - Create, Read, Delete User

// useContext()
// createContext()

// App -> Users -> User 
// App -> NewUser

// 1. create context
// 2. provide the context
// 3. use the context