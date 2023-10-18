import SlideContainer from "./SlideContainer";
import { useState, useEffect } from 'react';

const GameOverModal = ({ scenes }) => {
  console.log("SCENES in GameMOdal", scenes)
  const [quizScenes, setQuizScenes] = useState([])

  useEffect(()=>{
    setQuizScenes(scenes)
  },[quizScenes])

  return (    
    scenes && <SlideContainer scenes={scenes} />              
  );
};

export default GameOverModal;

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