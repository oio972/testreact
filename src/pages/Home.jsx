import React from 'react';
import "./home.css";
import Banner  from "../component/Banner/Banner";
import Homeimage from "../component/Homeimage/Homeimage";
import Card from '../component/Card/Card';
import Footer from "../component/Footer/Footer";
import LogementsData from '../component/Data/LogementsData.json';

const Home = () => {
  return (
    <div className='html'>
      <Banner/>
      <Homeimage/>
      <section className="gallery">
        <div className="gallery_container">
          {LogementsData.map((inputValue => <Card value={inputValue} key={inputValue.id}/>))}
        </div>
      </section>
        <div>
          <Footer/>
        </div>
    </div>
  )
}
// Exportation du composant Home en tant qu'exportation par défaut
export default Home
                  


           