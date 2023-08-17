import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals'; /*Cela est lié à la surveillance des performances de l'application*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import Apropos from './pages/Apropos';
import Erreur404 from './pages/Erreur404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*La balise <React.StrictMode> est utilisée pour activer le mode strict de React, 
  qui effectue des vérifications supplémentaires en développement pour aider à détecter les problèmes potentiels.*/
  <React.StrictMode>
    <Router>
      <Routes>
        {/*Chaque Route a un chemin path et un composant element à rendre lorsque le chemin d'URL correspond.*/}
        <Route path='/' element={<Home />} />{/*La route '/' correspond au composant Home*/}
        <Route path='/ficheLogement/:id' element={<FicheLogement />} />{/* la route '/ficheLogement/:id' correspond au composant FicheLogement, en utilisant :id comme paramètre d'URL*/}
        {/* Utilisez :id pour indiquer que c'est un paramètre d'URL */}
        <Route path='/Apropos' element={<Apropos />} />{/* la route '/Apropos' correspond au composant Apropos*/}
        <Route path='*' element={<Erreur404 />} />{/*la route '*' correspond au composant Erreur404.*/}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
