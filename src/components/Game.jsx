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
    if (displayedScene && getRandomScene) {
      const delay2 = setTimeout(() => {
        setIsLoading(false);
      }, 6000);
      return () => clearTimeout(delay2);
    }
  }, [displayedScene]);

  useEffect(() => {
    if (quizCounter === 0) {
      const delay1 = setTimeout(() => {
        setShowGameOverModal(true);
      }, 4000);

      return () => clearTimeout(delay1);
    }

    if (displayedScene) {
      console.log("inGAME quizSummary,", quizSummary);
      setQuizSummary((prevSummary) => [...prevSummary, displayedScene]);
    }
  }, [quizCounter, displayedScene]);

  return (
    <main>
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
              <Score score={score} quizCounter={quizCounter} />
              <DisplayImage
                selectedScene={displayedScene}
                quizCounter={quizCounter}
                isLoading={isLoading}
              />
              <div>
                <QuizCounter
                  quizCounter={quizCounter}
                  decrementCounter={decrementCounter}
                />
              </div>
            </div>
            {showGameOverModal && (
              <GameOverModal allQuizScenes={quizSummary} score={score} />
            )}
          </>
        )
      )}
    </main>
  );
};

export default Game;
