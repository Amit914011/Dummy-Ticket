import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/client/Navbar'
import Footer from './components/client/Footer'
import {Outlet, useLocation} from 'react-router-dom'

function App() {

  const location=useLocation()

  useEffect(()=>{
    window.scrollTo({
      top:'0',
      behavior:'smooth'
    })
  },[location.pathname])

  return (
  <>
  
  <div className=''>
  <Navbar/>
    </div> 
    <Outlet/>
    <Footer/>
  
  </>
  
  )
}

export default App
