import React, {memo, useMemo} from 'react'


const Message = ({numberOfMessages, onHandleIncrement}) => {
    console.log("Message rendering")

  const calculatedNumber = useMemo(
          ()=>{
              let number = 0;
              for (let index = 0; index < 5000000000; index++) {
              number ++;
            
          }
          return number
        }, [])

  return (
    <div>
        <h2>Number: {calculatedNumber}</h2>
        <p>send {numberOfMessages} Message</p>
        <div><br/>
          <button onClick={onHandleIncrement}>Increment Message Number</button>
        </div>
    </div>
  )
}

export default memo(Message)

// Memo Function 