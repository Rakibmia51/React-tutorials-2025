import React from 'react'

 import { ToastContainer, toast } from 'react-toastify';


function TOASTIFY() {

    const notify = () => toast.success("Wow so easy!");

  return (
    <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
    </div>
  )
}

export default TOASTIFY