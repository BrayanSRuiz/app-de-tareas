import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Contexto } from '../context/Contexto'

const Login = () => {
  const {logearse} = useContext(Contexto)
  const navegacion = useNavigate()
  const login = () => {
    navegacion('/', {replace:true})
    logearse()
  }
  return (
    <>
      <button onClick={login}>Login</button>
    </>
  )
}

export default Login
