import React from 'react'
import Footer from './Footer'
import img2 from '../img/5.jpg'
import Navbar from './Navbar'
import './Evento2.css'

function Evento1() {
  return (
    <div>
      <Navbar />
        <div className='contenedor0'>
            <div>
                <img src={img2}  className='img01' />
            </div>  
            <div className='text0'>
                <h2>Ars Nova y <br></br>Eclypse</h2>
                <h4>octubre 19</h4>
            </div>
        </div>
        <div className='text01'><h5>¡Sábado 19 de octubre de 2024 apertura a las 21:00h!</h5></div>
        <div className='text01'><h5>¡Os presentamos a Ars Nova y Eclipse!</h5></div>
        <div className='text02'><h3>PRECIOS:</h3><h5>Anticipada: 12€ o Taquilla: 15€</h5></div>
        <div> <a href='https://www.instagram.com/nebulaband.contact/?hl=es'  className='text-link3'>¡COMPRA TUS ENTRADAS AQUÍ</a></div>
        <div className='contenedor012'>
            <div className='text03'>
               <a href='Evento1' className='link-con'><h2><span>«</span> Nebula y Valoa</h2></a>
            </div>
            <div className='text04'>
            <a href='Evento5' className='link-con'><h2>¡Weird Punk Party! <span>»</span></h2></a>
            </div>
        </div>

      <Footer />
    </div>
  )
}

export default Evento1
