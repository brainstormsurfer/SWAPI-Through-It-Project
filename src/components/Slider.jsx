import { useState } from "react";
import '../styles/slider.css'
const Slider = ({ scenes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log("INSIDE SLIDER", scenes);
  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  // const dotStyles = {
  //   width: '100%',
  //   height: 'min-content',
  //   margin: "0 3px",
  //   cursor: "pointer",
  //   fontSize: "20px",
  //   color: 'orange'
  // };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${scenes[currentIndex].image})`,
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    Transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    Transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? scenes.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === scenes.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="mini-scene">
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        ‹
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        ›
      </div>
      <div style={slideStyles}></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
      {scenes.map((scene, slideIndex) => (
        <div
          key={slideIndex}
          className="dot"
          onClick={() => goToSlide(slideIndex)}
        >
          ●
        </div>
      ))}
      </div>
    </div>
  </div>
  );
};

export default Slider;
