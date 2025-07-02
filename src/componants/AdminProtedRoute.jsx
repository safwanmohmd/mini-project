import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AdminProtectedRoute = ({children}) => {
    const user = useSelector((state) => state.auth.user)
    const userRole = user?.role
  return (userRole == 'admin' && user ? children : <Navigate to={'/notauth'}/> )
}

export default AdminProtectedRoute