import React, { Component } from 'react'
import HomePage from './HomePage'
import LogInPage from './LogInPage'

 class CONDITIONAL_RENDERING extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }

  render() {

    const {isLoggedIn} = this.state
    let element;
//-------------------------------------------------------
//01
    // if(isLoggedIn){
    //     element = <HomePage/>
    // }else{
    //     element = <LogInPage/>
    // }

 //02
    // element = isLoggedIn ? <HomePage/> : <LogInPage/>

//03

//---------------------------------------------------------

    return(
        <div>
            {/* {element} */}
            {/* {isLoggedIn ? <HomePage/> : <LogInPage/>} */}
            {isLoggedIn && <HomePage/>}
        </div>
    )

   }
}
export default CONDITIONAL_RENDERING