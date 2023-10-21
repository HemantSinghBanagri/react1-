import React from 'react'
import "../App.css"

const Task = ({text,descp,deleteHandler,index}) => {
  return (
    <div className='task'>
        
        <div>
        <p>{text}</p>
        <span>{descp}</span>

        
      </div>
      <button onClick={()=>{
        deleteHandler(index)
      }}>-</button>
    </div>
  )
}

export default Task
