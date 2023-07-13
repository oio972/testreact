import React from "react";
import Banner from "../../component/Banner";
import Carrousel from "../../component/Carrousel";
import Footer from "../../component/Footer";

function FicheLogement(){
    return(
        <div className="App">
        <header className="App-header">
        </header>
          <Banner/>
          <Carrousel/>
          <Footer/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div> 
    )
}
export default FicheLogement