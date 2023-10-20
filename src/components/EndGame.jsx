import Carousel from "./Carousel";
import SlideContainer from "./SlideContainer";
import { useState, useEffect } from "react";
const EndGame = ({ scenes, score }) => {
  console.log("SCENES in GameMOdal", scenes);
  const [quizScenes, setQuizScenes] = useState([]);

  useEffect(() => {
    setQuizScenes(scenes);
  }, [quizScenes]);

  return (
    <div className="endgame-container">
      {/* { scenes && <SlideContainer scenes={quizScenes} /> } */}
      { scenes && <Carousel scenes={scenes} /> }
    </div>
  );
};
export default EndGame;

/*
   <Slider {...sliderSettings}>
          {allQuizScenes?.map((scene) => (
          <div className="scene-container ">
            <div key={nanoid()}>
              <img className="mini-scene" src={scene.image} alt="" />
            </div>
        </div>
          ))}
      </Slider>
*/
