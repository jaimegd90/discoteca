import React from 'react'
import Footer from './Footer'
import img2 from '../img/2222.png'
import Navbar from './Navbar'
import './Evento5.css'

function Evento5() {
  return (
    <div>
      <Navbar />
        <div className='contenedor0'>
            <div>
                <img src={img2}  className='img01' />
            </div>  
            <div className='text0'>
                <h2>¡Weird Punk<br></br> Party!</h2>
                <h4>octubre 26</h4>
            </div>
        </div>
        <div className='text01'><h5>¡WEIRD PUNK PARTY!</h5></div>
        <div className='text01'><h5>¡Sábado 26 de octubre de 2024 apertura a las 21:00h!</h5></div>
        <div className='text02'><h3>PELACATS + ASTROFÁLICOS + ZUTATEN</h3></div>
        <div className='text02'><h3>PRECIOS:</h3><h5>Anticipada: 12€ o Taquilla: 15€</h5></div>
        <div> <a href='https://entradium.com/es/events/astrofalicos-pelacats-zutaten-en-murcia'  className='text-link33'>¡COMPRA TUS ENTRADAS AQUÍ</a></div>
        <div className='contenedor012'>
        <div className='text03'>
               <a href='Evento1' className='link-con'><h2><span>«</span> Nebula y Valoa</h2></a>
            </div>
        </div>

      <Footer />
    </div>
  )
}

export default Evento5