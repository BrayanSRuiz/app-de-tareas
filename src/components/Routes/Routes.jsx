import {Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ListaDeTareas from '../pages/ListaDeTareas'
import ProtectedRoute from './ProtectedRoute'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={
        <ProtectedRoute>
          <ListaDeTareas />
        </ProtectedRoute>
        } />
        <Route path='/login'element={<Login />} />
        <Route path='/register' element={<Register />} /> 
      </Routes>
    </>
  )
}

export default Router
