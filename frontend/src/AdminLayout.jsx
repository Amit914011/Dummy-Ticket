import React, { useState } from 'react'
import Sidebar from './components/admin/Sidebar'
import Header from './components/admin/Header'
import { Navigate, Outlet } from 'react-router-dom'
import UserContextProvider from './context/userContextProvider'


export default function AdminLayout() {
  const [isLogin,setIsLogin]=useState(false)

  return (
    <>
      <UserContextProvider>
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
      </UserContextProvider>
    </>
  )
}
