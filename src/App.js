import React from 'react'

// importando react router
import { BrowserRouter as Router, Route } from 'react-router-dom'
// importando bootstrap

import './App.css';

import Navegacion from './components/Navegacion'
import Home from './components/Home'
import ShareVideo from './components/ShareVideo'
import CrearUsuario from './components/CrearUsuario'

// aqui importamos react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <Router>
     <Navegacion/>
    
    <Route path="/" exact component={Home} />
    <Route path="/shareVideos" exact component={ShareVideo} />
    <Route path="/CrearUsuario" exact component={CrearUsuario} />
    
    <ToastContainer />
   </Router>
  );
}

export default App;
