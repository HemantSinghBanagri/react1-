import React, { useEffect, useState } from 'react'
import Task from './Task';
import "../App.css"

const Home = () => {

  const storage=localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[]
  const [task,setTask]=useState(storage)
  const [text,setText]=useState("");
  const [descp,setDescp]=useState("");
  

  console.log(text,descp)


  const descpHandler=(e)=>{
    setDescp(e.target.value)

  }
  const textHandler=(e)=>{
    setText(e.target.value)
   
    

  }

  const submitHandler=(e)=>{
    e.preventDefault();
    setTask([...task,{
      text,
      descp,
    }])



  }


  const deleteHandler=(index)=>{
    const filterarr=task.filter((val,i)=>{

      return i!==index
    }


    )
    setTask(filterarr)

  }
  useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(task))

  },[task])
 
 
  return (
    <div className='todo'>
    <form onSubmit={submitHandler}>
      <input type='text' placeholder='enter text' value={text} onChange={textHandler}></input>
      <textarea  placeholder='write somthing' value={descp} onChange={descpHandler}></textarea>
      <button > submit</button>
      
    </form>
      {task.map((item,index)=>(
        <Task key={index}  text={item.text}  descp={item.descp} deleteHandler={deleteHandler} index={index}/>
      ))}
    </div>
  )
}

export default Home
