import React from 'react'

import style from './App.css'

import Index from './routes'

function ProtectedRouting() {
  return (
    <Index/>
  )
}

// /home -> <Home/>
// /contact -> <Contact/>
export default ProtectedRouting


// blogs/htm -> htmlPage
// blogs/css -> cssPage
// blogs/c -> cpage

// blogs/htm -> Blog (html)
// blogs/css -> Blog (css)
// blogs/c -> Blog (c)