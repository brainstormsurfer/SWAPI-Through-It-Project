import SlideContainer from "./SlideContainer";
import { useState, useEffect } from 'react';


const GameOverModal = ({ allQuizScenes, score }) => {
  console.log("SCENES in GameMOdal", allQuizScenes)
  const [quizScenes, setQuizScenes] = useState([])

  useEffect(()=>{
    
    setQuizScenes(allQuizScenes)
  },[quizScenes])

  return (
    <div>
      {allQuizScenes &&  
      <SlideContainer 
      quizScenes={allQuizScenes} 
      score={score} />
}
    </div>
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