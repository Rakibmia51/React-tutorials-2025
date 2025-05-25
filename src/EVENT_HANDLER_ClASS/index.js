import React, { Component } from 'react'

 class EVENT_HANDLER_ClASS extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         changedValue : ''
      }
    }

    handleOnClick =()=>{
        console.log("click")
    }


   handleOnChange = (e)=>{
    // console.log(e.target.value)
    this.setState({
        changedValue : e.target.value
    }, ()=>{
        console.log(this.state.changedValue)
    })
    
   }



  render() {
    return (
      <div>
            <button onClick={this.handleOnClick}>Click here</button>
            <input type='text' onChange={this.handleOnChange}/>
            <p>{this.state.changedValue}</p>
      </div>
    )
  }
}

export default EVENT_HANDLER_ClASS