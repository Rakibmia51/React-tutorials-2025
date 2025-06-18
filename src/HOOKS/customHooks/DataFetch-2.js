import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'





 function CustomDataFetch_2() {

    const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/posts");

    const loadingMessage = <p>Data is Loading...</p>
    const errorMessae = <p>{error}</p>


    const todoElement = data && data.map((todo)=>{
                return <p key={todo.id}>{todo.title}</p>
                
            })

    

  return (
    <div>
        <h1>Data Fetch - Todos</h1>
        {error &&  errorMessae}
        {isLoading && loadingMessage}
        {todoElement}
    </div>

  )
}
export default CustomDataFetch_2