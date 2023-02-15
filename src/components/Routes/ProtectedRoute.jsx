import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Contexto } from '../../context/Contexto'

const ProtectedRoute = ({children}) => {
  const {usuario} = useContext(Contexto)

  if(!usuario) {
    return <Navigate to='/login' />
  } else {
    return <>{children}</>
  }
}

export default ProtectedRoute
