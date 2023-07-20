



import React, { useState } from 'react';
import './slideshow.css';

export default function Slideshow() {
  const images = [
    "imgcarrousel.png",
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow-container">
      <div className="lotImage">
        {images.map((image, index) => (
          <img
            key={index}
            className={`img ${index === currentSlide ? "active" : ""}`}
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="slide-controls">
        <button className="prev-button" onClick={prevSlide}>{"<"}</button>
        <div className="slide-indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`slide-indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
        <button className="next-button" onClick={nextSlide}>{">"}</button>
      </div>
    </div>
  );
}


