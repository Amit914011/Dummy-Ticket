import React from 'react'
import './App.css'
import Navbar from './components/client/Navbar'
import Footer from './components/client/Footer'
import {Outlet} from 'react-router-dom'
import UserContextProvider from './context/userContextProvider'

function App() {

  return (
  <>
  <UserContextProvider>
  <div className=''>
  <Navbar/>
    </div> 
    <Outlet/>
    <Footer/>
  </UserContextProvider>
  </>
  
  )
}

export default App
