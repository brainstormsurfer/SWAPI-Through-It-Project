import { useState } from "react";
import { useGameContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import "./styles/Carousel.css";

const Carousel = () => {
  const {
    state: { quizSummary },
  } = useGameContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  if (!quizSummary || quizSummary.length === 0) {
    navigate("/quiz");
    return; 
  }

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
      <div
        className={`poster-container ${
          quizSummary[currentIndex].score === 1
            ? "posterStylesLight"
            : "posterStylesDark"
        }`}
      >
        <img
          className="posterStyles"
          alt=""
          src={quizSummary[currentIndex].poster}
        />
      </div>

      <div className="arrowContainer">
        <div className="arrow leftArrow" onClick={goToPrevious}>
          ‹
        </div>
        <div className="arrow rightArrow" onClick={goToNext}>
          ›
        </div>
      </div>
      <div className="sceneDotsContainer">
        <div className="slider-container">
          <div
            className={` ${currentIndex !== 0 ? "prevSlide dynamicSlide" : "hidden dynamicSlide"
            }`}
            style={{
              backgroundImage: `url(${quizSummary[currentIndex - 1]?.image})`,
            }}
          ></div>
          <div
            className={`dynamicSlide currentSlide ${
              quizSummary[currentIndex].score === 1
                ? "summary-scene-correct"
                : "summary-scene-wrong"
            }`}
            style={{
              backgroundImage: `url(${quizSummary[currentIndex].image})`,
            }}
          ></div>
          <div
            className={`${currentIndex === quizSummary.length-1 ? "hidden dynamicSlide" : "nextSlide dynamicSlide"}`}
            style={{
              backgroundImage: `url(${quizSummary[currentIndex + 1]?.image})`,
            }}
          ></div>
        </div>

        <div className="nav-dots">
          {quizSummary.map((scene, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""} 
              ${
                scene.score === 1
                  ? "dot-background-correct"
                  : "dot-background-wrong"
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
