import React, { useState } from 'react'
import axios from "axios"
import '../App.css'
const Contact = () => {

  const [image,setImage]=useState([])
  const getImage=async()=>{
    try {
      const res=await axios.get('https://picsum.photos/v2/list')
      const data=res.data
      setImage(data)
      console.log(data)
      
    } catch (error) {
      console.log(error)
    }

  }
  
  

 
  
  return (
    <div className='container' >
    <button onClick={getImage}>Get Image</button>
    <div className='image'>
      {image.map((item,index)=>(
        <>
        <h1>{item.author}</h1>
        <img key={index} src={item.download_url}/>
        </>
      ))}
    </div>

    
      
    </div>
  )
}

export default Contact
