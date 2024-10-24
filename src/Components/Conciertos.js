import React from 'react'
import './Conciertos.css'
import Footer from './Footer'
import Navbar from './Navbar'
import img2 from '../img/4.png' 
import img3 from '../img/5.jpg'
import img22 from '../img/2222.png'

function Conciertos() {
  return (
    <div>
      <Navbar />
      <div className='imagen'>
        <h2>¡Agendaos para los próximos<br></br> eventos en la sala spectrum!</h2>
      </div>
      <div className='jai'>
      <div className='contenedor12'>
      <div className='box1'>
          <div className='text3'>
            <h2>26 octubre 2024</h2>
          </div>
            <div className='text4'>
              <h1>¡WEIRD PUNK PARTY!</h1>
              <p>¡WEIRD PUNK PARTY! ¡Sábado 26 de octubre de 2024 apertura a las 21:00h! PELACATS + ASTROFÁLICOS + ZUTATEN PRECIOS: Anticipada: 12€ o Taquilla: 15€ ¡COMPRA TUS ENTRADAS AQUÍ!
              </p>
              <a href='Evento5' ><h4>COMPRA TU ENTRADA</h4></a>
            </div>
            <a href="#!"><img src={img22} className='img-box'/></a>
        </div>
      </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="28" viewBox="0 0 32 28" fill="none" className='flecha'><path d="M0.651611 11.5709L16 26.9191L31.3483 11.5709" stroke="#909090" stroke-width="0.74"></path><path d="M0.651367 1.1073L15.9998 16.4556L31.348 1.1073" stroke="#909090" stroke-width="0.74"></path></svg>
      <h2 className='h2'>EVENTOS PASADOS</h2>
      <div className='contenedor11'>
      <div className='box'>
          <div className='text3'>
            <h2>11 octubre 2024</h2>
          </div>
            <div className='text4'>
              <h1>Never Grow Up!</h1>
              <p>¡Os presentamos este viernes 11 de octubre de 2024 a las 23:00, Never Grow up! SKA PUNK - PUNK ROCK - NU METAL - DNB - TEKNO - HARDCORE Line […]
              </p>
              <a href='Evento3' ><h4>COMPRA TU ENTRADA</h4></a>
            </div>
            <a href="#!"><img src='https://www.salaspectrum.com/wp-content/uploads/2024/10/neverGrow-724x1024.jpg' className='img-box'/></a>
        </div>
      <div className='box'>
          <div className='text3'>
            <h2>12 octubre 2024</h2>
          </div>
            <div className='text4'>
              <h1>Ejecutores Fest</h1>
              <p>¡Sábado 12 de octubre de 2024 apertura a las 20:00h! PRECIOS: Anticipada: 10€, Taquilla: 12€, Socios: 8€ ¡Horarios de EJECUTORES FEST! Difunter - 21:00h Stainless Madness - 22:00h Percutor - […]
              </p>
              <a href='Evento4' ><h4>COMPRA TU ENTRADA</h4></a>
            </div>
            <a href="#!"><img src='https://www.salaspectrum.com/wp-content/uploads/2024/10/Ejecutores-724x1024.jpg' className='img-box'/></a>
        </div>
        <div className='box'>
          <div className='text3'>
            <h2>18 octubre 2024</h2>
          </div>
            <div className='text4'>
              <h1>nebula y valoa</h1>
              <p>¡Viernes 18 de octubre de 2024 a las 22:00h! ¡Nebula vuelve! La banda murciana de rock alternativo que, tras un par de años de trabajo, sacó a la luz en […]
              </p>
              <a href='Evento1' ><h4>COMPRA TU ENTRADA</h4></a>
            </div>
            <a href="#!"><img src={img2} className='img-box'/></a>
        </div>
        <div className='box'>
          <div className='text3'>
            <h2>19 octubre 2024</h2>
          </div>
            <div className='text4'>
              <h1>ars nova y eclipse</h1>
              <p>¡Sábado 19 de octubre de 2024 apertura a las 21:00h! ¡Os presentamos a Ars Nova y Eclypse! PRECIOS: Anticipada: 12€ o Taquilla: 15€ ¡COMPRA TUS ENTRADAS AQUÍ!
              </p>
              <a href='Evento2' ><h4>COMPRA TU ENTRADA</h4></a>
            </div>
            <a href="#!"><img src={img3} className='img-box'/></a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Conciertos
