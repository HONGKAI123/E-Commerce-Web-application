import React, { useState, useEffect } from "react";
import "./HeroSlider.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function HeroSlider() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const image = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  const nextSliderHandler = () => {
    let nextSlide;
    if (currentSlider === image.length - 1) {
      nextSlide = 0;
    } else {
      nextSlide = currentSlider + 1;
    }
    setCurrentSlider(nextSlide);
  };
  const prevSliderHandler = () => {
    let prevSlide;
    if (currentSlider === 0) {
      prevSlide = image.length - 1;
    } else {
      prevSlide = currentSlider - 1;
    }
    setCurrentSlider(prevSlide);
  };
  const indicatorsHandler = (index) => {
    setCurrentSlider(index);
  };
  useEffect(() => {
    let id = setInterval(() => {
      nextSliderHandler();
    }, 4000);
    return () => {
      clearInterval(id);
    };
  });
  return (
    <div className="heroslider">
      <div className="slider-container">
        <img src={image[currentSlider]} alt="heroimage" />
        <ArrowBackIosNewIcon
          onClick={prevSliderHandler}
          fontSize="large"
          className="left-icon"
        />
        <ArrowForwardIosIcon
          fontSize="large"
          onClick={nextSliderHandler}
          className="right-icon"
        />
        <div className="carousel-indicators">
          {image.map((_, index) => {
            return (
              <div
                key={index}
                className={`carousel-indicators-dots ${
                  currentSlider === index ? "selected" : ""
                }`}
                onClick={() => indicatorsHandler(index)}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;
