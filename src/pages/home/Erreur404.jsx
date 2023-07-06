import React from "react";
import Banner  from "../../component/Banner ";
import Erreur from "../../component/Erreur";
import Footer from "../../component/Footer";
function Erreur404(){
    return(
        <div className="App">
        <header className="App-header">
            <Banner/>
            <Erreur/>
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
export default Erreur404