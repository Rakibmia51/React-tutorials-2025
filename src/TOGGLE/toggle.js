import React, { useState } from 'react'

 function TOGGLE() {
    const [toggle, setToggle] = useState(true);

   

  return (
    <div style={{margin: "1rem", backgroundColor: "pink", padding: "1rem"}}>
        {toggle && (
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a 
              type specimen book. It has survived not only five centuries, but also 
              the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets 
              containing Lorem Ipsum passages, and more recently with desktop publishing 
              software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        )}
        <div style={{textAlign: "center"}}>
            <button onClick={()=>{setToggle(!toggle)}}>
                {toggle ? "hide" : "Show"}
            </button>
            {/* <button onClick={()=>{setToggle(false)}}>Hide</button> */}
        </div>
    </div>
  )
}
export default TOGGLE