import {useContext} from "react"


import { UsersContext } from '../context/UserContext';

export const useUsersContext = ()=>{
    return useContext(UsersContext)
}