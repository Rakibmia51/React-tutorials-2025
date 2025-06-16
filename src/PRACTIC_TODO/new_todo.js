import React, { useState } from 'react'

 function NEW_TODO(props) {

    const [todo, setTodo] = useState({title: "", desc: "", salary: "", rent: ""})
     const {title, desc, salary, rent} = todo;

     const handleChange =(event)=>{
        const name = event.target.name;
        setTodo((oldTodo)=>{
            return {...oldTodo,[name]: event.target.value}
        })
     }

     const handleSubmit = (event)=>{
            event.preventDefault();
            props.onAddTodo(todo);
            setTodo({title: "", desc: "", salary: "", rent: ""})
        }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='title'>Title:</label>
            <input type='text' id='title' name='title' value={title} 
            onChange={handleChange}/>
        </div>
        <br/>
        <div>
            <label htmlFor='title'>Description:</label>
            <input type='text' id='desc' name='desc' value={desc} 
            onChange={handleChange}/>
        </div>
         <br/>
         <div>
            <label htmlFor='salary'>Salary:</label>
            <input type='text' id='salary' name='salary' value={salary} 
            onChange={handleChange}/>
        </div>

         <br/>
         <div>
            <label htmlFor='rent'>Rent:</label>
            <input type='text' id='rent' name='rent' value={rent} 
            onChange={handleChange}/>
        </div>
        
         <br/>
         
         {/* <div>
            <label htmlFor='total'>Total:</label>
            <input type='text' id='total' name='total' value={total} 
            onChange={handleChange}/>
        </div> */}

        
     <br/>
           <div>
            <button>submit</button>

        </div>
        <hr></hr>
    </form>
    
  )
}
export default NEW_TODO
