import Filmbar from "./Filmbar";
import DisplayImage from "./DisplayImage";
import Score from "./Score";
import Loading from "./Loading";

import { useScenes } from "./ScenesContext";
import { useEffect, useState } from "react";
import QuizCounter from "./QuizCounter";

const Game = () => {
  const { getRandomScene, displayedScene, score, isLoading, setIsLoading } =
    useScenes();
  const [quizCounter, setQuizCounter] = useState(10);

  const decrementCounter = () => {
    if (quizCounter > 0) {
      setQuizCounter(quizCounter - 1);
    }
  };

  useEffect(() => {
    console.log("isLoading", isLoading);
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h4 className="quiz-title">
            The Ultimate
            <span className="special-s">S</span>
            <span className="span">tar Wars</span> Quiz
          </h4>
          <nav className="main-nav">
            <Filmbar
              getRandomScene={getRandomScene}
              decrementCounter={decrementCounter}
            />
          </nav>
          <div className="showcase">
            <section className="container left-container">
              {/* className={`container left-container ${quizCounter > 0 ? '' : 'shrink'}`} > */}
              <Score score={score}  quizCounter={quizCounter}/>
            </section>
            <DisplayImage
              selectedScene={displayedScene}
              quizCounter={quizCounter}
            />
            <section className="container right-container">
              {/* className={`container right-container ${quizCounter > 0 ? '' : 'shrink'}`} >              */}
              <div>
                <QuizCounter
                  quizCounter={quizCounter}
                  decrementCounter={decrementCounter}
                />
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default Game;
