import React, { useEffect, useState } from 'react'



const loadingMessage = <p>Data is Loading...</p>

 function DataFetch() {

    const [todos, setTodo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        // setTimeout(()=>{

              fetch("https://jsonplaceholder.typicode.com/todos")
              .then((res)=>{

                if(!res.ok){
                  throw Error("Fecthing is not successful")
                }

                  return res.json()
              })
              .then((data)=>{
                  setTodo(data);
                  // console.log(todos)
                  setIsLoading(false)
                  setError(null)
              })
              .catch((error)=>{
                  setError(error.message)
                  setIsLoading(false)
              })

        // },2000)

    },[])

    const todoElement = todos && todos.map((todo)=>{
                return <p key={todo.id}>{todo.title}</p>
                
            })

    

  return (
    <div>
        <h1>Data Fetch - Todos</h1>
        {error && <p>{error}</p>}
        {isLoading && loadingMessage}
        {todoElement}
    </div>

  )
}
export default DataFetch