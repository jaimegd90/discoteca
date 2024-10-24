import React from 'react'
import Footer from './Footer'
import img2 from '../img/555.jpg'
import Navbar from './Navbar'
import './Evento4.css'

function Evento3() {
  return (
    <div>
      <Navbar />
        <div className='contenedor0'>
            <div>
                <img src={img2}  className='img01' />
            </div>  
            <div className='text0'>
                <h2>Ejecutores Fest</h2>
                <h4>octubre 12</h4>
            </div>
        </div>
        <div className='text01'><h5>¡Sábado 12 de octubre de 2024 apertura a las 20:00h!</h5></div>
        <div className='text02'><h3>PRECIOS:</h3><h5>Anticipada: 10€, Taquilla: 12€, Socios: 8€</h5></div>
        <div className='text01'><h5>¡Horarios de EJECUTORES FEST!</h5></div>
        <div className='text02'><h3>Difunter – 21:00h</h3></div>
        <div className='text02'><h3>Stainless Madness – 22:00h</h3></div>
        <div className='text02'><h3>Percutor – 23:00h</h3></div>
        <div className='text02'><h3>Evilact – 00:00h</h3></div>
        <div> <a href='https://entradium.com/es/events/ejecutores-festival'  className='text-link33'>¡COMPRA TUS ENTRADAS AQUÍ</a></div>
        <div className='contenedor0123'>
            <div className='text033'>
              <a href='Evento3' className='link-con'><h2><span>«</span> Never Grow Up!</h2></a>
            </div>
            <div className='text055'>
                <a href='Evento1' className='link-con'><h2>Nebula y Valoa <span>»</span></h2></a>
            </div>
        </div>

      <Footer />
    </div>
  )
}

export default Evento3