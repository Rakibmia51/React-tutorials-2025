import React from 'react'

 function TODO(props) {
     const {title,desc, salary, rent} = props.todo;
    const {id} = props;

     const handleClick = ()=>{
       props.onRemoveTodo(id);
    }

  return (
    <article>
        <div>
            
            <p>{title}-{desc}-{salary}- {rent}<button  onClick={()=>{handleClick(id)}}>
                    <i className='fa fa-trash fa-2x'></i>
            </button>
            </p>
            
        </div>
    </article>
  )
}
export default TODO
