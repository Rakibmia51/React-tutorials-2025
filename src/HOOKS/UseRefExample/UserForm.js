import React, {useRef} from 'react'

const UseRefForm = () => {

    const userNameRef = useRef();
    const userPasswordRef = useRef();
    
    const handleSubmit =(event)=>{
        event.preventDefault();
        const userName = userNameRef.current.value;
        const password = userPasswordRef.current.value;

        userNameRef.current.style.color = "red";
        
        console.log({userName, password})
    }
  return (
    <form onSubmit={handleSubmit}>
         <div className='form-field'>
                <label htmlFor='userName'>UserName :</label>
                <input type='text' id='userName' ref={userNameRef}/>
        </div>

        <div className='form-field'>
            <label htmlFor='password'>Password :</label>
            <input type='password' id='password' ref={userPasswordRef}/>
        </div>
        <button type='submit'>Register</button>
    </form>
  )
}

export default UseRefForm
