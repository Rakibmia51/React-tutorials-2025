import React, { useEffect, useState } from 'react'

 function DataFetch() {

    const [todos, setTodo] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setTodo(data);
            // console.log(todos)
        })
    },[])

  return (
    <div>
        <h1>Data Fetch - Todos</h1>
        {todos && todos.map((todo)=>{
                return <p key={todo.id}>{todo.title}</p>
                
            })}
    </div>

  )
}
export default DataFetch