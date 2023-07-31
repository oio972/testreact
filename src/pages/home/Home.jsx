import React from 'react';
import "../../component/home.css";
import Banner  from "../../component/Banner/Banner";
import Homeimage from "../../component/Homeimage/Homeimage";
import ApartmentHome from "../../component/ApartmentHome/ApartmentHome";
import Footer from "../../component/Footer/Footer";

const Home = () => {
  return (
  <>
  <div className='html'>
      <div className="rooot">
            <Banner/>
            <Homeimage/>
            <ApartmentHome/>
      </div>
          <div>
            <Footer/>
          </div>
  </div>
  </>
    )
  }
export default Home