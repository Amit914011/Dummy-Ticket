import React, { useState } from 'react'
import UserContext from '../context/UserContext'

export default function UserContextProvider({children}) {
    let [user ,setUser] = useState('')
  return (
    <div>
      <UserContext.Provider value={{user , setUser}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}
