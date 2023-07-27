import React from 'react';
import "../../component/home.css";
import Banner  from "../../component/Banner/Banner";
import Homeimage from "../../component/Homeimage/Homeimage";
import Body from "../../component/Boby/Body";
import Footer from "../../component/Footer/Footer";

export default function Home() {
  return (
  <>
  <div className='html'>
      <div className="rooot">
            <Banner/>
            <Homeimage/>
            <Body/>
      </div>
          <div>
            <Footer/>
          </div>
  </div>
    </>
    )
  }
      


