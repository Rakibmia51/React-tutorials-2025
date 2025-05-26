import React, { useState } from 'react'
import style from './form.module.css'

 function FORM2() {


    const [user, setUser] = useState({name: '', email: '', password: ''})
    const {name, email, password} = user


//01
    // const handleChange = (e)=>{
    //     const filedName = e.target.name;
    //     if(filedName === 'name'){
    //          setUser({name: e.target.value, email, password});
    //     }
    //      if(filedName === 'email'){
    //          setUser({name, email: e.target.value, password});
    //     }
    //     if(filedName === 'password'){
    //          setUser({name, email, password: e.target.value});
    //     }
            
    //     console.log()
    // }

  //02  
    const handleChange = (e)=>{
       setUser({ ...user, [e.target.name]: e.target.value}); 
    }
//------------------------------------------------------------


    const handleSubmit = (e)=>{
        console.log("form is submitted")
        console.log(user);
        e.preventDefault()
    }


  return (
    <div>
        <h1>Registration</h1>
        <form action= "" onSubmit={handleSubmit}>

        <div className={style.formGroup}>
            <label htmlFor='name'>Name:</label>
            <input 
            type='text' 
            name='name' 
            id='name' 
            value={name}
            onChange={handleChange} required/>
        </div>
            
        <div className={style.formGroup}>
            <label htmlFor='email'>Email:</label>
            <input 
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={handleChange} required/>
        </div>
        
        <div className={style.formGroup}>
            <label htmlFor='password'>Password:</label>
            <input 
            type='password'
            name='password'   
            id='password' 
            value={password}
            onChange={handleChange} required/>
        </div>
    
        <div className={style.formGroup}>
            <button type='submit'>Register</button>
        </div>

        </form>

    </div>
  )
}

export default FORM2