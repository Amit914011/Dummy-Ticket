import React from 'react'
import Sidebar from './Sidebar'

export default function Ticket() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold">Welcome to Navbar </h1>
        <p className="mt-4">
          This is the main content area of the YouTube dashboard clone.
        </p>
      </div>
    </div>
  )
}
