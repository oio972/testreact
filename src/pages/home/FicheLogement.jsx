import React from "react";
import "../../component/home.css";
import Banner from "../../component/Banner/Banner";
import Slideshow from "../../component/Slideshow/Slideshow";
import Apartment from "../../component/Apartment/Apartment";
import Footer from "../../component/Footer/Footer";

export default function FicheLogement(){
    return(
      <>
      <div className='html'>
          <div className="rooot">
            <Banner/>
            <Slideshow/>
            <Apartment/>
         </div>
            <div>
               <Footer/>
            </div>
      </div>
      </>
   )
}