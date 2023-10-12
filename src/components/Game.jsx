import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Filmbar from "./Filmbar";
import DisplayImage from "./DisplayImage";
import Score from "./Score";
import QuizCounter from "./QuizCounter";
import GameOverModal from "./GameOverModal";
import { useScenes } from "./ScenesContext";

const Game = () => {
  const {getRandomScene, displayedScene, score } = useScenes();
  const [isLoading, setIsLoading] = useState(true);
  const [quizCounter, setQuizCounter] = useState(10);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [quizSummary, setQuizSummary] = useState([]);

  const decrementCounter = () => {
    if (quizCounter > 0) {
      setQuizCounter(quizCounter - 1);
    }
  };

  useEffect(() => {
    if (displayedScene) setIsLoading(false);
  }, [displayedScene]);

  // Check if quizCounter reaches zero
  useEffect(() => {
    if (quizCounter === 0) {
      // After a delay, set showGameOverModal to true
      const delay = setTimeout(() => {
        setShowGameOverModal(true);
      }, 3000); // Adjust the delay time as needed

      // Return a cleanup function to clear the timeout (optional)
      return () => clearTimeout(delay);
    }
    if (displayedScene) {
      setQuizSummary(() => {
        let allScenes = [...quizSummary]
         allScenes.push(displayedScene)
         return allScenes
      });
      }
  }, [quizCounter, displayedScene]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        displayedScene && (
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
              <section className="container">
                <Score score={score} quizCounter={quizCounter} />
              </section>
              <DisplayImage
                selectedScene={displayedScene}
                quizCounter={quizCounter}
              />
              <section className="container">
                <div>
                  <QuizCounter
                    quizCounter={quizCounter}
                    decrementCounter={decrementCounter}
                  />
                </div>
              </section>
            </div>
            {showGameOverModal && (
              <GameOverModal allQuizScenes={quizSummary} score={score} />
            )}
          </>
        )
      )}
    </>
  );
};
export default Game;
