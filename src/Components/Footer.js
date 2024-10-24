import React from 'react'
import logo from '../img/logo.png'
import img6 from '../img/inst.png'
import img7 from '../img/ubi.png'
import img8 from '../img/footer.png'
import './Footer.css'


function Footer() {
  return (
    <div>
      <div className='text7'>
          <h2>Nos encanta leeros después de vuestra visita</h2>
        </div>
        <div>
          
        </div>
      <div className='text8'>
          <h2>¡Dejad que la música <br /> os una a nosotros!</h2>
          <p>Podéis encontrar la Sala Spectrum en Instagram,<br /> donde compartimos noticias, eventos y contenido<br /> relacionado con la música que os apasiona.</p>
          <div className='boton'><a href='contacto' className='btn-2'>MÁS INFORMACIÓN</a></div>
        
          <div className='contenedor5'>
            <div className='text9'>
              <img src={logo} className='img7'></img>
              <p>¡Uníos a la escena en Sala Spectrum! <br />Somos vuestra sala del Heavy Metal en<br /> Murcia. Conciertos intensos, riffs poderosos<br /> y una experiencia única.</p>
              <h2>SÍGUENOS: 
                <a href="https://www.instagram.com/salaspectrum/?hl=en" target="_blank"><img src={img6} className='img6'></img></a>
                <a href="https://www.google.com/maps/place/Sala+Spectrum/@38.0005881,-1.1453067,15z/data=!4m6!3m5!1s0xd63811230a0d28d:0x190497892d30abb0!8m2!3d38.0005881!4d-1.1453067!16s%2Fg%2F11ffm2myrn?sa=X&ved=2ahUKEwio767FqIv_AhVkhv0HHVMfCsUQ_BJ6BAhgEAg&shorturl=1" target="_blank"><img src={img7} className='img8'></img></a></h2>
            </div>
            <div className='text10'>
              <h2>INFORMACIÓN DE CONTACTO</h2>
              <p>Dirección:<br />
                  Av. Ciclista Mariano Rojas, 16, 30009 <br />
                  Murcia<br /><br />
                  Teléfono: 669 546 444<br /><br />
                  Mail: <a href='mailto:salaspectrum@gmail.com' className='enlace1'>salaspectrum@gmail.com</a><br /><br />
                  <a href='https://www.google.com/maps/dir//Sala+Spectrum,+Av.+Ciclista+Mariano+Rojas,+16,+30009+Murcia,+Espa%C3%B1a/@38.0005881,-1.1453067,3343m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0xd63811230a0d28d:0x190497892d30abb0!2m2!1d-1.1453005!2d38.0005952?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D' className='enlace' target="_blank">Cómo llegar →</a></p>
            </div>
            <div className='text11'>
              <h2>LEGAL</h2>
              <a href='AvisoLegal' className='link2'>Aviso legal</a><br /><br />
              <a href={'PoliticaPrivacidad'} className='link2'>Política de privacidad</a><br /><br />
              <a href={'Politicas'} className='link2'>Política de cookies (UE)</a><br /><br />  
              <a href={'Accesibilidad'} className='link2'>Accesibilidad</a><br /><br />
            </div>
          </div>
          
        </div>
        <div className='footer'>
          <img src={img8} className='img-foot'></img>        
          </div>
        </div>
        
  )
}

export default Footer
