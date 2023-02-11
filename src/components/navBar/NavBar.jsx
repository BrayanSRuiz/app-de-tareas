import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Contexto } from '../../context/Contexto'
import styles from './NavBar.module.css'

const NavBar = () => {
  const {deslogearse} = useContext(Contexto)
  const navegacion = useNavigate()
  const logout = () => {
    navegacion('/login', {replace:true})
    deslogearse()
  }
  return (
    <>
      <nav>
        <div><NavLink to='/listaTareas' className={({isActive}) => isActive ? styles.active : null} >Inicio</NavLink>
        <NavLink to='/tareas' className={({isActive}) => isActive ? styles.active : null} >Tareas</NavLink>
        </div>
        <button onClick={logout} >Logout</button>
      </nav>
    </>
  )
}

export default NavBar
