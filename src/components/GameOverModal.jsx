import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const GameOverModal = ({ allQuizScenes, score }) => {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <div className="scene-container">
        <h2>{score} scenes were correct</h2>
        <Slider {...sliderSettings}>
          {allQuizScenes.map((scene) => (
            <div key={scene.id}>                
              <img 
              className="mini-scene" 
              src={scene.image} 
              alt="" />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default GameOverModal;
  