import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './pages/Index';
import Tienda from './pages/Tienda';
import Random from './pages/Random';
import DragonesMaz from './pages/DragonesMaz';
import Clases from './pages/Clases';
import PokeApi from './pages/PokeApi';
import Tipos from './pages/Tipos';
import ApiAlterna from './pages/ApiAlterna';
import './css/Style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<>

<Router>

<Header/>
  <Routes>
  <Route path ='/' element = {<Index/>}/>
  <Route path='/tienda' element={<Tienda/>}/>
  <Route path='/persona' element={<Random/>}/>
  <Route path='/item'element={<DragonesMaz/>}/>
  <Route path='/item/:name'element={<Clases/>}/>
  <Route path='/poke'element={<PokeApi/>}/>
  <Route path='/poke/:id'element={<Tipos/>}/>
  <Route path='/alterna'element={<ApiAlterna/>}/>

  </Routes>
<Footer/>

</Router>

</>
);
