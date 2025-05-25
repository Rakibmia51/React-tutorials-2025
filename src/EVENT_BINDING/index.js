import React, { Component } from 'react'

 class EVENT_BINDING extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
// Normal Function - Must be included bind
    // handleClick(){
    //     this.setState({
    //         count : this.state.count + 1
    //     })
    // }

// ES6 Function no need
     handleClick=()=>{
        this.setState({
            count : this.state.count + 1
        })
    }

  render() {
    return (
      <div>
            <h1>{this.state.count}</h1>
            {/* <button onClick={this.handleClick.bind(this)}>increase</button> */}
            <button onClick={this.handleClick}>increase</button>
      </div>
    )
  }
}
export default EVENT_BINDING