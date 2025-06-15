import React, { useState } from 'react'
import style from './newtodo.module.css'
 function NewTodo(props) {

  const [todo, setTodo] = useState({title: "", desc: ""})
  const {title, desc} = todo;

  const handleChange =(event)=>{
    const name = event.target.name;
    setTodo((oldTodo)=>{
      return {...oldTodo,[name]: event.target.value}
    })
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
   props.onAddTodo(todo);
    setTodo({title: "", desc: ""})
  }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
            <label htmlFor='title' className={style["form-field label"]}>Title:</label>
            <input type='text' 
            id='title' 
            name='title' 
            className={style["form-field input"]} 
            value={title} 
            onChange={handleChange}/>
        </div>
        <div className={style["form-field"]}>
            <label htmlFor='desc' className={style["form-field label"]}>Description:</label>
            <textarea  
            id='desc' 
            name='desc' 
            className={style["form-field textarea"]}
            value={desc}
            onChange={handleChange}
            />
        </div>
        <button type='submit' className={style["form-field"]}>Add todo</button>
    </form>
  )
}
export default NewTodo