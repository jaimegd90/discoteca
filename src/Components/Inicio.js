import React from 'react'
import './Inicio.css'
import logo from '../img/logo.png'
import img2 from '../img/4.png' 
import img3 from '../img/5.jpg'
import img4 from '../img/logo 2.png'
import img5 from '../img/foto 9.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
import Carousel from './Carousel'


function Inicio() {
  return (
    <div>
      <Navbar />

    <div className='body'>
      <img className='img' fetchpriority="high" decoding="async" width="729" height="1024" src="https://www.salaspectrum.com/wp-content/uploads/2024/10/spectrumOctubre2024-729x1024.jpeg" class="attachment-large size-large wp-image-1900" alt="oct2024cartel" srcset="https://www.salaspectrum.com/wp-content/uploads/2024/10/spectrumOctubre2024-729x1024.jpeg 729w, https://www.salaspectrum.com/wp-content/uploads/2024/10/spectrumOctubre2024-214x300.jpeg 214w, https://www.salaspectrum.com/wp-content/uploads/2024/10/spectrumOctubre2024-768x1078.jpeg 768w, https://www.salaspectrum.com/wp-content/uploads/2024/10/spectrumOctubre2024-1094x1536.jpeg 1094w, https://www.salaspectrum.com/wp-content/uploads/2024/10/spectrumOctubre2024-600x842.jpeg 600w, https://www.salaspectrum.com/wp-content/uploads/2024/10/spectrumOctubre2024.jpeg 1448w" sizes="(max-width: 729px) 100vw, 729px"></img>
      <div className='contenedor'>
        <div className='box'>
          <div className='text3'>
            <h2>18 octubre 2024</h2>
          </div>
            <div className='text4'>
              <h1>nebula y valoa</h1>
              <p>¡Viernes 18 de octubre de 2024 a las 22:00h! ¡Nebula vuelve! La banda murciana de rock alternativo que, tras un par de años de trabajo, sacó a la luz en […]
              </p>
              <a href='Evento1'><h4>COMPRA TU ENTRADA</h4></a>
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
              <a href='Evento2'><h4>COMPRA TU ENTRADA</h4></a>
            </div>
            <a href="#!"><img src={img3} className='img-box'/></a>
        </div>
        <div>
        <button className='button'><a href='conciertos' className='btn'>VER TODOS LOS EVENTOS</a>
        </button>
        </div>
      </div>
      
      <div className='contenedor2'>
      <div className='carousel99'>
        <div>
          <h1>LA SALA</h1>
          <p>Exploramos la esencia del Heavy Metal underground, atrayendo a un público joven y entregado. En un ambiente auténtico y electrizante, los amantes del género disfrutan de su música favorita en vivo mientras degustan nuestras bebidas.</p>
        </div>
        <div className='carousel19'><Carousel /></div>
      </div>
        <div className='text2'>
        <h2>¡Preparaos para el apoteósico <br /> sonido del Heavy Metal!</h2>
        </div>
        <div className='contenedor3'>
          <div className='caja1'>
            <img src={logo} className='logo2'></img>
            <h4>Una sala de conciertos dedicada al Heavy Metal</h4>
            <p>Un santuario para los amantes del metal, Spectrum ofrece una experiencia acústica incomparable. Sumérgete en el fervor del heavy metal en este espacio dotado con tecnología de vanguardia, garantizando conciertos intensos e inolvidables</p>
          </div>
          <div className='caja2'>
            <img src={img4} className='logo3'></img>
              <h4>Juventud y Rebeldía</h4>
              <p>Ebullitiva y energética, Discordia es sinónimo de juventud y rebeldía. Este espacio se destaca por su ambiente vibrante, donde cada nota reverbera con fuerza, creando una experiencia de concierto que evoca la esencia pura.</p>
          </div>
        </div>

        <div className='contenedor4'>
          <div className='caja3'>
            <img src={logo} className='logo22'></img>
            <p>Somos un espacio cultural público reconocido por el ayuntamiento de Murcia.</p>
            <p>En colaboración con Murcia Live (asociación de salas de música en directo de la Región de Murcia) y ACCES (Asociación Española de Salas de Conciertos).</p>
            <h4>¡Nos enorgullece ser parte de la vibrante escena musical de la zona!</h4>
          </div>
          <div>
            <img src={img5} className='img5'></img>
          </div>
        </div>
        
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Inicio
