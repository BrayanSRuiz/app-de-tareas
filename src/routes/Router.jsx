import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Router2 from './Router2'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/*' element={<Router2 />} />
      </Routes>
    </>
  )
}

export default Router
