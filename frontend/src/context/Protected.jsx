import React, {  useContext } from 'react'
import UserContext from './UserContext'
import { Navigate } from 'react-router-dom'

export default function Protected({children}) {
    let {adminLogin} = useContext(UserContext)
    if(adminLogin){
        return children
    }else{
        return <Navigate to='/admin/login'/>
    }
}
