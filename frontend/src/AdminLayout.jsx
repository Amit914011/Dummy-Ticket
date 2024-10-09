import React from 'react'
import Sidebar from './components/admin/Sidebar'
import Header from './components/admin/Header'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <>
      <div className='w-fill h-auto flex'>
        <div className='w- h-screen'>
            <Sidebar/>
        </div>
        <div className='w-full'>
            <Header/>
            <div className='w-full bg-gray-100'>
                <Outlet/>
            </div>
        </div>
      </div>
    </>
  )
}
