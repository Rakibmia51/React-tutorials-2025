import React, { Component, createRef } from 'react'

export default class UserForm extends Component {
    constructor(props) {
      super(props)
      this.userNameRef = createRef()
      this.userPassword = createRef()
      this.state = {
         
      }
    }
    handleSubmit =(event)=>{
        event.preventDefault();
        console.log(this.userNameRef.current.value)
        this.userNameRef.current.style.backgroundColor = "green";
        
        console.log(this.userPassword.current.value)
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
            <div className='form-field'>
                <label htmlFor='userName'>UserName :</label>
                <input type='text' id='userName' ref={this.userNameRef}/>
            </div>

            <div className='form-field'>
                <label htmlFor='password'>Password :</label>
                <input type='password' id='password' ref={this.userPassword}/>
            </div>
            <button type='submit'>Register</button>
      </form>
    )
  }
}
