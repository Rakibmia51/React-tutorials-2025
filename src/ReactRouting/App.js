import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import style from './App.css'
// pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Blogs from './pages/Blogs'
import Blog from './pages/Blog'
import User from './pages/User'

function App_ReactRouting() {
  return (
    <BrowserRouter>
       <Navbar/>
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/blogs' element={<Blogs/>}/>
                <Route path='/blogs/:title' element={<Blog/>}/>
                <Route path='*' element={<Error/>}/>
                {/* <Route path='user/:userid' element={<User/>}/>  1st type*/}
                <Route path='user/' element={<User/>}/>
        </Routes>
    </BrowserRouter>
  )
}

// /home -> <Home/>
// /contact -> <Contact/>
export default App_ReactRouting


// blogs/htm -> htmlPage
// blogs/css -> cssPage
// blogs/c -> cpage

// blogs/htm -> Blog (html)
// blogs/css -> Blog (css)
// blogs/c -> Blog (c)