import React from 'react'
import TODO from './todo'

 function TODOS(props) {
  return (
    <section>
       {props.todos.map((todo)=>{
                return <TODO todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo}/>
            }
                
            )}
    </section>
  )
}

export default TODOS