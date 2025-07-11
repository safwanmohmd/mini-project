import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({children}) => {
    const user = useSelector((state)=>state.auth.user)
  return (user.user ? children : <Navigate to={'/login'}/> )
}

export default ProtectedRoute