import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Cart from './pages/Cart'
const App = () => {
  return (

    <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/cart' element={<Cart/>}/>
    </Routes>
  
  )
}

export default App