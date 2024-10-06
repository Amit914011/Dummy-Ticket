import React from 'react'
import './App.css'
import Navbar from './components/client/Navbar'
import Footer from './components/client/Footer'
import {Outlet} from 'react-router-dom'

function App() {

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
