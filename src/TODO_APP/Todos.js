import React from 'react'
import TodoR from './Todo';
import style from './todos.module.css'

 function Todos(props) {

    console.log(props.todos)
  return (
   <section className={style.todos}>
        {
            props.todos.map((todo)=>{
                return <TodoR todo ={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo}/>
             
            })
        }
   </section>
    

  )
}
export default Todos;