/* eslint-disable no-undef */
import React from "react";
import Accueil from "../../component/Accueil";
import Carrousel from "../../component/Carrousel";
import Footer from "../../component/Footer";
function FicheLogement(){
    return(
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Accueil/>
          <Carrousel/>
          <Footer/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
}
export default FicheLogement