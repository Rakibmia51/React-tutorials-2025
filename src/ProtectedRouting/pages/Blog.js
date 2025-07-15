import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { blogsData } from '../data';



const Blog = () => {

    const {title} = useParams();
    // 1st Option
    // const [bodyData, setBodyData] = useState("")

    // 2nd Option 
    const location = useLocation()  // 2nd Option
    

    // 1st Option
    // useEffect(() => {
    //    const blogData = blogsData.filter((blog)=> blog.title === title)
    //     setBodyData(blogData[0].body)
    // }, []);
    
  return (
    <div>
        <h1>{title} page</h1>
        <p>{location.state.body.slice(0,300)}</p><br/>
        <p>{location.state.body.slice(301,5800)}</p>
    </div>
  )
}

export default Blog