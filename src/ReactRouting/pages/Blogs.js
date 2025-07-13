import React, { useState } from 'react'
import { blogsData } from '../data'
import { Link } from 'react-router-dom';



function Blogs() {
  const [blogs, setBlogs] = useState(blogsData);

  const truncateString = (str, num)=>{
    if(str.length > num){
      return str.slice(0, num)+ "..."
    }else{
      return str;
    }
  }

  return (
    <div><br/>
        <h1>Blog Page</h1>
        <section>
            {blogs.map((blog) =>{
              const {id, title, body} = blog;
              return <article key={id}>
                  <h3>{title}</h3>
                  <p>{truncateString(body,200)}</p><br/>
                  <Link to={title} state={{id, title, body}}>Learn More</Link>
                  { /*2nd Option - state={{id, title, body}} */ }
              </article>
            })}
        </section>
        
    </div>
  )
}

export default Blogs