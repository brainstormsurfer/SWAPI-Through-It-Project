import { useState } from "react";

const Carousel = ({ scenes, score}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isPosterFrameGlow, setIsPosterFrameGlow] = useState(false);

  // backgroundPosition: "top",
  // backgroundSize: "cover",
  // backgroundRepeat: "no-repeat",
  // overflow: "hidden",
  // background: `url(${scenes[currentIndex].poster})`,
  // border: "5px solid #ff0000",
  //  outline: `15px solid  ${scenes[currentIndex].score === 1 ? "rgb(0, 223, 67)" : "#ff0000"}`,
  const dynamicPosterStyles = {
    zIndex: "-1",
    borderRadius: "50%",
    height: "51rem",
    width: "42rem",
    transform: "translateY(-7.5rem)",
    boxShadow: `0px 0px 45px 15px ${scenes[currentIndex].score === 1 ? "rgba(3, 255, 66, 0.945)" : "#ff0000"}`
  };

  const dynamicStyles = {
    // position: "relative",
    // justifyContent: "center",
    // alignSelf: "flex-end",
    // alignItems: "center",
    width: "23%",
    height: "100%",
    borderRadius: "15px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: "1",
  };

  const currentSlideStyles = {
    ...dynamicStyles,
    width: "48rem",
    height: "23rem",
    justifySelf: "end",
    backgroundImage: `url(${scenes[currentIndex].image})`,
    borderRadius: "10px",
    border: `5px ridge ${
      scenes[currentIndex].score === 1 ? "rgb(0, 223, 67)" : "rgb(255, 0, 0)"
    }`,
    zIndex: "3",
    marginBottom: "1rem",
  };

  const prevSlideStyles = {
    ...dynamicStyles,
    border: `${currentIndex === 0 ? "none" : "3px ridge grey"}`,
    backgroundImage: `${
      currentIndex === 0 ? "none" : `url(${scenes[currentIndex - 1].image})`
    }`,
    filter: "grayscale(100%)",
    transform: "translate(26%, -46%) scale(0.8)",
    animation: "slideTransform 2s linear forwards",
  };

  const nextSlideStyles = {
    ...dynamicStyles,
    border: `${currentIndex === scenes.length - 1 ? "none" : "3px ridge grey"}`,
    backgroundImage: `${
      currentIndex === scenes.length - 1
        ? "none"
        : `url(${scenes[currentIndex + 1].image})`
    }`,
    filter: "grayscale(100%)",
    transform: "translate(-26%, -46%) scale(0.8)",
    animation: "slideTransformBack 2s linear forwards",
  };

  const arrowContainerStyles = {
    position: "absolute",
    top: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  };

  const arrowStyles = {
    fontSize: "10rem",
    // color: "#fbff00",
    color: "#fff",
    cursor: "pointer",    
  };

  const leftArrowStyles = {
    ...arrowStyles,
    transform: "translate(25rem, -50%)",
  };

  const rightArrowStyles = {
    ...arrowStyles,
    transform: "translate(-25rem, -50%)",
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
      <div className={`poster-container ${scenes[currentIndex].score === 1 ? "posterStylesLight" : "posterStylesDark"}`}
      style={dynamicPosterStyles}>
        <img
          className="posterStyles"
          alt=""
          src={scenes[currentIndex].poster}
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
  
        <div className="slider-container">
          <div style={prevSlideStyles}></div>
          <div style={currentSlideStyles}></div>
          <div style={nextSlideStyles}></div>
        </div>

        {/* <div className="dotsContainer"> */}
        <div className="nav-dots">
          {scenes.map((scene, index) => (
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
      {/* </div> */}
    </div>
  );
};

export default Carousel;
