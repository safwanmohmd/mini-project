import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Menu from './pages/Menu'
import AdminProtectedRoute from './componants/AdminProtedRoute'
import ProtectedRoute from './componants/ProtectedRoute'
import NotAuthorized from './pages/NotAuth'
import HomePage from './pages/HomePage'
import Checkout from './pages/Checkout'
import Error from './pages/Error'
const App = () => {


  return (

 <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/notauth' element={<NotAuthorized/>}/>
  <Route path='/menu' element={<Menu/>}/>
  <Route path='/checkout' element={<Checkout/>}/>

  <Route path='/cart' element={ <ProtectedRoute> <Cart />  </ProtectedRoute>}/>
  <Route path='/admin' element={ <AdminProtectedRoute> <Admin /> </AdminProtectedRoute> }/>
  <Route path='*' element={<Error/>}/>
 </Routes>
  
  )
}

export default App