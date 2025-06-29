import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Dashboard from './pages/dashboard'

import ProtectedRoute from './componants/ProtectedRoute'
import { useSelector } from 'react-redux'
const App = () => {


  return (

    <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/dashboard' element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>}/>
    </Routes>
  
  )
}

export default App