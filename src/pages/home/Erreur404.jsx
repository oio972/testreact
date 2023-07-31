import React from "react";
import Banner from "../../component/Banner/Banner";
import Erreur from "../../component/Erreur/Erreur";
import Footer from "../../component/Footer/Footer";
const Erreur404 = () => {
    return(
    <div className="html">
      <div className="rooot">
        <Banner/>
        <Erreur/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    )
}

export default Erreur404