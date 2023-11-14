import { useState } from "react";
import { useGameContext } from "../context/context";
import { useNavigate } from "react-router-dom"; 

const Carousel = () => {
  const { state: { quizSummary }} = useGameContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();  

  if (!quizSummary || quizSummary.length === 0) {
    console.log("error : quizSummary has no data")
    return null; // Return null when quizSummary is empty
  }


  if (!quizSummary || quizSummary.length === 0) {
    navigate("/quiz"); 
    return null; // Return null to prevent rendering the carousel
  }

  const dynamicStyles = {
    width: "calc(10vmax + 5rem)",
    height: "calc(5vmax + 5rem)",
    borderRadius: "15px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: "1",
  };

  const currentSlideStyles = {
    ...dynamicStyles,   
    width: "calc(15vmax + 10rem)",
    height: "calc(7vmax + 5rem)", 
    backgroundImage: `url(${quizSummary[currentIndex].image})`,
    borderRadius: "10px",
    border: `5px ridge ${
      quizSummary[currentIndex].score === 1 ? "rgb(0, 223, 67)" : "rgb(255, 0, 0)"
    }`,
    zIndex: "3"
  };

  const prevSlideStyles = {
    ...dynamicStyles,
    border: `${currentIndex === 0 ? "none" : "3px ridge grey"}`,
    backgroundImage: `${
      currentIndex === 0 ? "none" : `url(${quizSummary[currentIndex - 1].image})`
    }`,
    filter: "grayscale(100%)",
    transform: "translate(26%, -46%) scale(0.8)",
    animation: "slideTransform 2s linear forwards",
  };

  const nextSlideStyles = {
    ...dynamicStyles,
    border: `${currentIndex === quizSummary.length - 1 ? "none" : "3px ridge grey"}`,
    backgroundImage: `${
      currentIndex === quizSummary.length - 1
        ? "none"
        : `url(${quizSummary[currentIndex + 1].image})`
    }`,
    filter: "grayscale(100%)",
    transform: "translate(-26%, -46%) scale(0.8)",
    animation: "slideTransformBack 2s linear forwards",
  };

  const arrowContainerStyles = {
    position: "absolute",
    top: "10%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  };

  const arrowStyles = {
    fontSize: "10rem",
    color: "#fff",
    cursor: "pointer",    
  };

  const leftArrowStyles = {
    ...arrowStyles,
    transform: "translate(10%, 100%)",
  };

  const rightArrowStyles = {
    ...arrowStyles,
    transform: "translate(10%, 100%)",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? quizSummary.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === quizSummary.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="carousel-container">
      <div className={`poster-container ${quizSummary[currentIndex].score === 1 ? "posterStylesLight" : "posterStylesDark"}`}>
        <img 
          className="posterStyles"
          alt=""
          src={quizSummary[currentIndex].poster}
        />
      </div>
      <div style={arrowContainerStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>
          ‹
        </div>
        <div style={rightArrowStyles} onClick={goToNext}>
          ›
        </div>
      </div>
      <div className="sceneDotsContainer">

        <div className="slider-container">
          <div style={prevSlideStyles}></div>
          <div style={currentSlideStyles}></div>
          <div style={nextSlideStyles}></div>
        </div>

        <div className="nav-dots">
          {quizSummary.map((scene, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              style={{
                backgroundColor:
                  scene.score === 1 ? "rgb(0, 223, 67)" : "rgb(255, 0, 0)",
              }}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
