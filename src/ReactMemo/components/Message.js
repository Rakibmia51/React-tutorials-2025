import React, {memo} from 'react'


const Message = ({numberOfMessages}) => {
    console.log("Message rendering")
  return (
    <div>
        <p>send {numberOfMessages} Message</p>
    </div>
  )
}

export default memo(Message)

// Memo Function 