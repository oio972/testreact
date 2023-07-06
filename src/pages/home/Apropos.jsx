import React from "react";
import Banner  from "../../component/Banner ";
import Carrousel from "../../component/Carrousel";
import Footer from "../../component/Footer";
function Apropos(){
    return(
        <div className="App">
        <header className="App-header">
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
        </header>
      </div>
    )
}
export default Apropos