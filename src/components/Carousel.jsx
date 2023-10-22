import { useState } from "react";

const Carousel = ({ scenes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);    

  const dynamicStyles = {
    position: "relative",
    justifyContent: "center",
    // alignItems: "center",
    width: "30%",
    height: "95%",  
    borderRadius: "15px",    
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    border: `3px ridge grey`,
    zIndex:'2'
  };

  const currentSlideStyles = {
    ...dynamicStyles, 
    backgroundImage: `url(${scenes[currentIndex].image})`,    
    borderRadius: "10px",     
    border: `5px ridge ${scenes[currentIndex].score === 1 ? "rgb(0, 223, 67)" : "rgb(255, 0, 0)"}`,
    zIndex:'3'
  };

  const prevSlideStyles = {
    ...dynamicStyles,     
    backgroundImage: `${currentIndex === 0 ? 'none' : `url(${scenes[currentIndex - 1].image})`}`,
    alignSelf: '5rem',
    filter: 'grayscale(100%)',
    transform: "translate(23%, -22%) scale(0.8)",
    animation: "slideTransform 2s linear forwards"
  };

  const nextSlideStyles = {
    ...dynamicStyles, 
    backgroundImage: `${currentIndex === scenes.length - 1 ? 'none' : `url(${scenes[currentIndex + 1].image})`}`,
    filter: 'grayscale(100%)',
    transform: "translate(-23%, -22%) scale(0.8)",    
    animation: "slideTransformBack 2s linear forwards"
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
      
      <div
      style={prevSlideStyles}></div>
      <div style={currentSlideStyles}></div>
      <div style={nextSlideStyles}></div>
      </div>
      <div className="nav-dots">
          {scenes.map((scene, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              style={{backgroundColor: scene.score === 1 ? "rgb(0, 223, 67)" : "rgb(255, 0, 0)"}}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
    </div>
  );
};

export default Carousel;
