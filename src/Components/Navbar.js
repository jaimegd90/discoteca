import React from 'react'
import './Navbar.css'
import logo from '../img/logo.png'

function Navbar() {
  return (
    <div className='inicio'>
      <a href="/discoteca"><img src={logo} className='logo'/></a>
      <div className='nav'>
      <a href='/discoteca' className='links1'>Inicio </a>
      <a href='conciertos' className='links'>Conciertos</a>
      <a href='discordia' className='links'>Discordia</a>
      <a href='contacto' className='links2'>Contacto</a>
      </div>
    </div>
  )
}

export default Navbar
