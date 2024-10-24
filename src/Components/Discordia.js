import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import img8 from '../img/66666.jpg'
import './Discordia.css'

export default function Discordia() {
  return (
    <div>
      <Navbar />
      
      <div className='fondo'>
        <img fetchpriority="high" decoding="async" width="799" height="154" src="https://www.salaspectrum.com/wp-content/uploads/2024/10/Discordia-1024x676-1.png" class="img222" alt="" srcset="https://www.salaspectrum.com/wp-content/uploads/2024/10/Discordia-1024x676-1.png 799w, https://www.salaspectrum.com/wp-content/uploads/2024/10/Discordia-1024x676-1-300x58.png 300w, https://www.salaspectrum.com/wp-content/uploads/2024/10/Discordia-1024x676-1-768x148.png 768w, https://www.salaspectrum.com/wp-content/uploads/2024/10/Discordia-1024x676-1-600x116.png 600w" sizes="(max-width: 799px) 100vw, 799px"></img>
      </div>

      <div className='jai'>
        <div className='contenedor123'>
          <div className='box11'>
            <div className='text44'>
              <h1>No hay más eventos próximos</h1>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="28" viewBox="0 0 32 28" fill="none" className='flecha'><path d="M0.651611 11.5709L16 26.9191L31.3483 11.5709" stroke="#909090" stroke-width="0.74"></path><path d="M0.651367 1.1073L15.9998 16.4556L31.348 1.1073" stroke="#909090" stroke-width="0.74"></path></svg>
      <h2 className='h2'>EVENTOS PASADOS</h2>
      <div className='contenedor1234'>
        <div className='box'>
          <div className='text3'>
            <h2>12 octubre 2024</h2>
          </div>
            <div className='text4'>
              <h1>KONTAKT 2
              </h1>
              <p>¡Sábado 12 de octubre de 2024 desde las 02:00! PRECIOS: Anticipada: 5€ Kontakt vuelve a Spectrum mas cargado que antes, y los encargados de haceros bailar esa noche son: @b.li.x: […]
              </p>
              <h4>COMPRA TU ENTRADA</h4>
            </div>
            <a href="#!"><img src={img8} className='img-box'/></a>
        </div>
      </div>
    
      <Footer />
    </div>
  )
}
