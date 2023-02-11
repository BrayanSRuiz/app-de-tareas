import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ListaDeTareas from '../components/ListaDeTareas'
import NavBar from '../components/navBar/NavBar'

const Router2 = () => {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path='listaTareas' element={<ListaDeTareas />} />
        <Route path='/' element={<Navigate to='/listaTareas' />} />
      </Routes>
    </>
  )
}

export default Router2
