import React from "react";
import Banner from "../../component/Banner";
import Carousssel from "../../component/Carousssel";
import Carrousel from "../../component/Carrousel";
import Footer from "../../component/Footer";

function FicheLogement(){
    return(
        <div className="App">
        <header className="App-header">
          <Banner/>
          <Carousssel/>
          <Carrousel/>
          <Footer/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
        </div> 
    )
}
export default FicheLogement