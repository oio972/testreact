import React from 'react';
import "../../component/home.css";
import Banner  from "../../component/Banner/Banner";
import Homeimage from "../../component/Homeimage/Homeimage";
import Card from '../../component/Card/Card';
import Footer from "../../component/Footer/Footer";
import LogementsData from '../../component/Data/LogementsData.json';

const Home = () => {
  return (
    <div className='html'>
        <div className="rooot">
          <Banner/>
          <Homeimage/>
          <div className='body'>
            {LogementsData.map((house) =>(
              <div>
                <Card house={house}/>
              </div>
        ))}
          </div>
        </div>
          <div>
            <Footer/>
          </div>
    </div>
  )
}
export default Home
                  


           