import React from "react";
import Banner from "../../component/Banner";
import Erreur from "../../component/Erreur";
function Erreur404(){
    return(
        <div className="App">
          <header className="App-header">
              <Banner/>
              <Erreur/>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
            </a>
          </header>
      </div>
    )
}
export default Erreur404