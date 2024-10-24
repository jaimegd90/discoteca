import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './Components/Inicio';
import Conciertos from './Components/Conciertos';
import Discordia from './Components/Discordia';
import Contacto from './Components/Contacto';
import Evento1 from './Components/Evento1';
import Evento2 from './Components/Evento2';
import Evento3 from './Components/Evento3';
import Evento4 from './Components/Evento4';
import Evento5 from './Components/Evento5';
import AvisoLegal from './Components/AvisoLegal';
import PoliticaPrivacidad from './Components/PoliticaPrivacidad';
import Accesibilidad from './Components/Accesibilidad';
import Politicas from './Components/Politicas';
import CarouselG from './Components/CarouselG';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/discoteca' element={<Inicio />} />
        <Route path='/conciertos' element={<Conciertos />} />
        <Route path='/discordia' element={<Discordia />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/evento1' element={<Evento1 />} />
        <Route path='/evento2' element={<Evento2 />} />
        <Route path='/evento3' element={<Evento3 />} />
        <Route path='/evento4' element={<Evento4 />} />
        <Route path='/evento5' element={<Evento5 />} />
        <Route path='/avisolegal' element={<AvisoLegal />} />
        <Route path='/politicaprivacidad' element={<PoliticaPrivacidad />} />
        <Route path='/accesibilidad' element={<Accesibilidad />} />
        <Route path='/politicas' element={<Politicas />} />
        <Route path='/carouselg' element={<CarouselG />} />
      </Routes>

    </div>
  );
}

export default App;
