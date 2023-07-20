import React from "react";
import Banner from "../../component/Banner";
import Slideshow from "../../component/Slideshow";
import Carrousel from "../../component/Carrousel";
import Footer from "../../component/Footer";

export default function FicheLogement(){
    return(
       <div>
          <Banner/>
          <Slideshow/>
          <Carrousel/>
          <Footer/>
       </div>
    )
}
