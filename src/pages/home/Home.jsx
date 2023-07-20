import React from "react";
import "../../component/home.css";
import Banner  from "../../component/Banner";
import Homeimage from "../../component/Homeimage";
import Body from "../../component/Body";
import Footer from "../../component/Footer";
export default function Home() {
  return (
      <div className="rooot">
        <Banner/>
        <Homeimage/>
        <Body/>
        <Footer/>
      </div>
  )
}

