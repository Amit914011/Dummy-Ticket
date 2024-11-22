import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}
