import Filmbar from "./Filmbar";
import DisplayImage from "./DisplayImage";
import Score from "./Score";
import Loading from "./Loading";

import { useScenes } from "./ScenesContext";
import { useEffect, useState } from "react";
import QuizCounter from "./QuizCounter"; 

const Game = () => {
  const { getRandomScene, displayedScene, score, isLoading, setIsLoading } = useScenes();
  const [quizCounter, setQuizCounter] = useState(10);
  
  const decrementCounter = () => {
    if (quizCounter > 0) {
      setQuizCounter(quizCounter - 1);
    }
    //  else {

    // }
  };

  useEffect(() => {    
    console.log("isLoading", isLoading)
      setIsLoading(false)      
  }, []);

  return (
    <>
      { isLoading ? (
        <Loading />
      ) : (
        <>
          <h4 className="quiz-title">
            The Ultimate
            <span className="special-s">S</span>
          <span className="span">tar Wars</span> Quiz</h4>
          <nav className="main-nav">
            <Filmbar getRandomScene={getRandomScene}  decrementCounter={decrementCounter} />
          </nav>
          <div className="showcase">
            <section className="container left-container">
              <Score score={score} />
            </section>
            <DisplayImage selectedScene={displayedScene} />
            <section className="container right-container">
             <div>
      <QuizCounter quizCounter={quizCounter} decrementCounter={decrementCounter} />
    </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default Game;
