import React from 'react'
import Footer from './Footer'
import img2 from '../img/888.jpg'
import Navbar from './Navbar'
import './Evento3.css'

function Evento3() {
  return (
    <div>
      <Navbar />
        <div className='contenedor0'>
            <div>
                <img src={img2}  className='img01' />
            </div>  
            <div className='text0'>
                <h2>Never Grow Up!</h2>
                <h4>octubre 11</h4>
            </div>
        </div>
        <div className='text01'><h5>¡Os presentamos este viernes 11 de octubre de 2024 a las 23:00, Never Grow up!</h5></div>
        <div className='text01'><h5>SKA PUNK – PUNK ROCK – NU METAL – DNB – TEKNO – HARDCORE</h5></div>
        <div className='text02'><h3>Line up: Joey Costa, Makinerx, Aspodeo y Jade</h3></div>
        <div> <a href='https://entradium.com/es/events/never-grow-up-murcia-sala-spectrum'  className='text-link33'>¡COMPRA TUS ENTRADAS AQUÍ</a></div>
        <div className='contenedor012'>
            <div className='text05'>
                <a href='Evento4' className='link-con'><h2>Ejecutores Fest <span>»</span></h2></a>
            </div>
        </div>

      <Footer />
    </div>
  )
}

export default Evento3