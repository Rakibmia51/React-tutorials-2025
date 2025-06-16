import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TODOS from './todos'
import NEW_TODO from './new_todo'


 const dummayData = [
        {title : "Rakib mia",
         desc : "IT Officer"
        },
        {title : "Sakibul Hasan",
         desc : "Officer"
        }
    ]

 function PRACTIC_TODO() {

    // const [todos, setTodos] = useState(dummayData)


   const [todos, setTodos] = useState([]);
   
     const handleAddTodo = (todo) => {
       setTodos((prevTodos) => {
         return [...prevTodos, {id: uuidv4(), todo}]
       })
     }


      const handleRemoveTodo = (id)=>{
            setTodos((prevTodos)=>{
            const filteredTodos = prevTodos.filter((todo)=> todo.id !== id)
            return filteredTodos
            })
        }


  return (
    <div>
        <NEW_TODO onAddTodo={handleAddTodo}/>
        <TODOS todos={todos} onRemoveTodo={handleRemoveTodo}/>
       
    </div>
  )
}
export default PRACTIC_TODO