import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Cart from './pages/Cart'
import Register from './pages/Register'

import AdminProtectedRoute from './componants/AdminProtedRoute'
import ProtectedRoute from './componants/ProtectedRoute'
import { useSelector } from 'react-redux'
import NotAuthorized from './pages/NotAuth'
import HomePage from './pages/HomePage'
const App = () => {


  return (

 <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/notauth' element={<NotAuthorized/>}/>

  <Route path='/cart' element={ <ProtectedRoute> <Cart />  </ProtectedRoute>}/>
  <Route path='/admin' element={ <AdminProtectedRoute> <Admin /> </AdminProtectedRoute> }/>
 </Routes>
  
  )
}

export default App