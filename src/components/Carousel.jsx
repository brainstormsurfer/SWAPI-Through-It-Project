import { useState } from "react";

const Carousel = ({ scenes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const dynamicStyles = {
   
  // };


  const slideStyles = {
    position: "relative",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: "100%",
    borderRadius: "10px",
     backgroundPosition: "center",
     backgroundSize: "cover",
     backGroundRepeat: "no-repeat",
    backgroundImage: `url(${scenes[currentIndex].image})`,
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
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
    <div className="carousel-container">
      <div className="slider-container">
         <div style={leftArrowStyles} onClick={goToPrevious}>
        ‹
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        ›
      </div>
      <div style={slideStyles}>
      </div>
      </div>
      <div className="navigation-dots">
          {scenes.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            >●</span>
          ))}
        </div>
    </div>
  );
};

export default Carousel;
