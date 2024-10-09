import React, { useState } from 'react'
import UserContext from '../context/UserContext'

export default function UserContextProvider({children}) {
    let [adminLogin ,setAdminLogin] = useState(false)
  return (
    <div>
      <UserContext.Provider value={{adminLogin , setAdminLogin}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}
