import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import './Contacto.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LiaMailBulkSolid } from "react-icons/lia";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Maps } from './Maps';

export default function Contacto() {
  return (
    <div>
      <Navbar />
      <div className='body'>
      <div className='contenedor22'>
        <div className='text-con'>
        <h1>contáctanos</h1>
        <h3>Visitadnos cuando deseéis</h3>
        <h4>Os damos la bienvenida al mundo del Heavy Metal</h4>
        </div>
        <div className='contenedor222'>
          <div className='contacto'>
          <FaPhoneAlt className='tel'/>
          <p>Teléfono: 669 546 444</p>
        </div>
        <div className='contacto2'>
          <FaInstagram className='tel'/>
          <p>Instagram:<a href="https://www.instagram.com/salaspectrum/?hl=en" className='link33'> salaspectrum</a></p>
        </div>
        <div className='contacto2'>
        <LiaMailBulkSolid className='tel'/>
          <p>Correo:<a href="mailto:salaespectrum@gmail.com" className='link33'> salaespectrum@gmail.com</a></p>
        </div>
        <div className='contacto2'>
        <FaMapMarkerAlt className='tel'/>
          <p>Correo:<a href="https://www.google.com/maps/place/Sala+Spectrum/@38.0005881,-1.1453067,15z/data=!4m6!3m5!1s0xd63811230a0d28d:0x190497892d30abb0!8m2!3d38.0005881!4d-1.1453067!16s%2Fg%2F11ffm2myrn?sa=X&ved=2ahUKEwio767FqIv_AhVkhv0HHVMfCsUQ_BJ6BAhgEAg&shorturl=1" className='link333'> Dirección: Av. Ciclista Mariano Rojas, 16, 30009 Murcia</a></p>
        </div>
        </div>
        <div className='mapa'>
        <Maps />
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}
