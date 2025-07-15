import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import Home from '../pages/Home.js'
import About from '../pages/About.js'
import Blogs from '../pages/Blogs.js'
import Blog from '../pages/Blog.js'
import Error from '../pages/Error.js'
import User from '../pages/User.js'
import Contact from '../pages/Contact.js'
// Navbar
import Navbar from '../components/Navbar.js'
import Protected from './Protected.js'



const Index = () => {

  const [isLoggedIn, setLoggedIn] = useState(false)


  return (
    <div>
        <BrowserRouter>
          <Navbar/>
         <div><br/>
           {isLoggedIn ? <button onClick={()=>{setLoggedIn(!isLoggedIn)}}>Log Out</button> : <button onClick={()=>{setLoggedIn(!isLoggedIn)}}>Log In</button>}
         </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>

                <Route path='/blogs' element={<Protected isLoggedIn={isLoggedIn}>
                  <Blogs/>
                </Protected>}/>

                <Route path='/blogs/:title' element={<Blog/>}/>
                <Route path='*' element={<Error/>}/>
                {/* <Route path='user/:userid' element={<User/>}/>  1st type*/}
                <Route path='user/' element={<User/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Index