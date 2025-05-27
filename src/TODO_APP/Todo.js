import React from 'react'
import style from './todo.module.css'

 function TodoR(props) {

    const {title,desc, id} = props.todo;
    console.log(props.title)
  return (
        <article className={style.todo}>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <button className={style.btn}>
                <i className='fa fa-trash fa-2x'></i>
            </button>
        </article>
  )
}
export default TodoR