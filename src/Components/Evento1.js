import React from 'react'
import Footer from './Footer'
import img2 from '../img/4.png'
import Navbar from './Navbar'
import './Evento1.css'

function Evento1() {
  return (
    <div>
      <Navbar />
        <div className='contenedor0'>
            <div>
                <img src={img2}  className='img01' />
            </div>  
            <div className='text0'>
                <h2>Nebula y <br></br>Valoa</h2>
                <h4>18 de octubre</h4>
            </div>
        </div>
        <div className='text01'>
            <h3>¡Nebula vuelve! La banda murciana de rock alternativo que, tras un par de años de trabajo, sacó a la luz en enero de 2020 su primer disco homónimo (el cual no se pudo presentar en directo debido al Covid) vuelve para subirse por primera vez al escenario. A pesar de los altibajos sufridos en el transcurso de estos años, se han decantado por dar una fiesta digna de la espera. Con motivo de este concierto de presentación, estarán acompañados por el potente sonido de Valoa (banda murciana de rock alternativo), que hará de este concierto un evento a la altura de la expectativas. Podéis estar al tanto de la novedades de cada banda y de este evento desde las redes sociales y las plataformas de cada a banda:</h3>
        </div>
       <div><a href='https://www.instagram.com/nebulaband.contact/?hl=es'  className='text-link'>@nebulaband.contact</a></div>
       <div className='ab'><a href='https://www.instagram.com/somosvaloa/' className='text-link2'>@somosvaloa</a></div>
       <div> <a href='https://www.instagram.com/nebulaband.contact/?hl=es'  className='text-link3'>¡COMPRA TUS ENTRADAS AQUÍ</a></div>
        <div className='text01'><h5>¡Os esperamos el próximo viernes 18 de octubre de 2024 a las 22:00h!</h5></div>
        <div className='text02'><h3>PRECIOS:</h3><h5>Anticipada: 8€ o Taquilla: 10€</h5></div>

        <div className='contenedor01'>
            <div className='text03'>
              <a href='Evento4' className='link-con'><h2><span>«</span> Ejecutores Fest</h2></a>
            </div>
            <div className='text04'>
                <a href='Evento2' className='link-con'><h2>Ars Novva y Eclypse <span>»</span></h2></a>
            </div>
        </div>

      <Footer />
    </div>
  )
}

export default Evento1
