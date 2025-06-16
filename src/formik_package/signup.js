import React, { useState } from 'react'

 import * as Yup from 'yup';
 import { useFormik } from 'formik';

// name, email, password

 function SIGNUP() {

  const formik = useFormik({
    initialValues: {
      name : "",
      email : "",
      password : "",
    },
    validationSchema: Yup.object({
      name : Yup.string().min(2, "Name must have atleast 2 characters").required(),
      email : Yup.string().email().required(),
      password : Yup.string().min(6, "Password must have atleast 6 characters").required(),
    }),
    onSubmit : (values, {resetForm})=> {
      console.log(values);
      resetForm({values: ""})
    }
  })



    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")


    // const handleNameChange =(e)=>{
    //   setName(e.target.value)
    // }

    //   const handleEmailChange =(e)=>{
    //   setEmail(e.target.value)
    // }

    //   const handlePasswordChange =(e)=>{
    //   setPassword(e.target.value)
    // }


    // const handleSubmit =(e)=>{
    //   e.preventDefault();
    //   const newUser = {
    //     name, email, password
    //   }
    //   console.log(newUser)
    // }

    const renderNameError = formik.touched.name && formik.errors.name && <span style={{color: "red"}}>{formik.errors.name}</span>
    const renderEmailError = formik.touched.email && formik.errors.email && <span style={{color: "red"}}>{formik.errors.email}</span>
    const renderPasswordError = formik.touched.password && formik.errors.password && <span style={{color: "red"}}>{formik.errors.password}</span>
  
    return (
    <div>
        <h2>User Signup</h2>
        <form onSubmit={formik.handleSubmit}>

          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>
            <br/>
            {renderNameError}
          </div>

           <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
            <br/>
             {renderEmailError}
          </div>

           <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' onChange={formik.handleChange} value={formik.values.password}/>
          <br/>
           {renderPasswordError}
          </div>

          <button type='submit'>Signup</button>
        </form>
    </div>
  )
}
export default SIGNUP