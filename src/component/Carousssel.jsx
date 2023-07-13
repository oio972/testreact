import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./carousssel.css"

function Carousssel() {
  const carouselRef = useRef(null);
return (
    <div>
      <div className="apropos">
        <Carousel showArrows={true} ref={carouselRef}>
          <div>
          <img className='imgcarrousel' src="imgcarrousel.png" alt="carrousel" />
          </div>
          <div>
            <img className='imgcarrousel' src="photo1.jpg" alt="carrousel" />
          </div>
          <div>
            <img className='imgcarrousel' src="photo2.jpg" alt="carrousel" />
          </div>
          <div>
            <img className='imgcarrousel' src="photo3.jpg" alt="carrousel" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Carousssel;




/*import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./carousssel.css"

function Carousssel() {
  return (
    <div>
      <div className="carousssel">
        <Carousel showArrows={true}>
          <div>
            <img className='imgcarrousel' src="imgcarrousel.png" alt="carrousel" />
          </div>
          <div>
            <img className='imgcarrousel' src="photo1.jpg" alt="carrousel" />
          </div>
          <div>
            <img className='imgcarrousel' src="photo2.jpg" alt="carrousel" />
          </div>
          <div>
            <img className='imgcarrousel' src="photo3.jpg" alt="carrousel" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
const CustomPrevArrow = ({ onClick }) => (
  <button className="carousel-arrow carousel-prev-arrow" 
  onClick={onClick}>
    precedent
  </button>
);
const CustomNextArrow = ({ onClick }) => (
  <button className="carousel-arrow carousel-next-arrow" 
  onClick={onClick}>
    suivant
  </button>
);

export default Carousssel;*/

  