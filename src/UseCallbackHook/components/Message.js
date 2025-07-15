import React, {memo} from 'react'


const Message = ({numberOfMessages, onHandleIncrement}) => {
    console.log("Message rendering")
  return (
    <div>
        <p>send {numberOfMessages} Message</p>
        <div><br/>
          <button onClick={onHandleIncrement}>Increment Message Number</button>
        </div>
    </div>
  )
}

export default memo(Message)

// Memo Function 