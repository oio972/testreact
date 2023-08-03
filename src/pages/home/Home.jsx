import React from 'react';
import "./home.css";
import Banner  from "../../component/Banner/Banner";
import Homeimage from "../../component/Homeimage/Homeimage";
import Card from '../../component/Card/Card';
import Footer from "../../component/Footer/Footer";
import LogementsData from '../../component/Data/LogementsData.json';

const Home = () => {
  return (
    <div className='html'>
      <Banner/>
      <Homeimage/>
        {LogementsData.map((keyhome) =>(
          <div className='body'>
            <Card key={keyhome.id} house={keyhome}/>
          </div>
        ))}
      <div>
        <Footer/>
      </div>
    </div>
  )
}
export default Home
                  


           