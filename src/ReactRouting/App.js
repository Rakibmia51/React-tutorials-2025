import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Error from './pages/Error'

function App_ReactRouting() {
  return (
    <BrowserRouter>
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='*' element={<Error/>}/>
        </Routes>
    </BrowserRouter>
  )
}

// /home -> <Home/>
// /contact -> <Contact/>
export default App_ReactRouting