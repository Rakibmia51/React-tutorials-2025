import React from 'react'
import style from './newtodo.module.css'
 function NewTodo() {
  return (
    <form className={style.form}>
        <div className={style["form-field"]}>
            <label htmlFor='title' className={style["form-field label"]}>Title:</label>
            <input type='text' id='title' name='title' className={style["form-field input"]} />
        </div>
        <div className={style["form-field"]}>
            <label htmlFor='desc' className={style["form-field label"]}>Description:</label>
            <textarea type='desc' id='desc' name='desc' className={style["form-field textarea"]}/>
        </div>
        <button type='submit' className={style["form-field"]}>Add todo</button>
    </form>
  )
}
export default NewTodo