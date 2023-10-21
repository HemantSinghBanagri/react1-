import React from 'react'
import Header from './Component/Header'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>

    

    </Routes>
    
    </BrowserRouter>
    
      
    </div>
  )
}

export default App
