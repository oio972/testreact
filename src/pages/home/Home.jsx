import React from "react";
import Banner  from "../../component/Banner";
import Homeimage from "../../component/Homeimage";
import Body from "../../component/Body";
import Footer from "../../component/Footer";
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner/>
        <Homeimage/>
        <Body/>
        <Footer/>
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
export default Home
