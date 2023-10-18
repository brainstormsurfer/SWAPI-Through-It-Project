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
  const [quizSummary, setQuizSummary] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

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
        setIsGameOver(true);
      }, 4000);
      return () => clearTimeout(delay1);
    }

    if (displayedScene && !quizSummary.includes(displayedScene)) {
      console.log("inGAME quizSummary,", quizSummary);
      setQuizSummary((prevSummary) => [...prevSummary, displayedScene]);
    }
  }, [quizCounter, displayedScene]);

  return (
    <main>
      {isLoading ? (
        <Loading isGameOver={isGameOver} />
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
                <QuizCounter
                  quizCounter={quizCounter}
                  decrementCounter={decrementCounter}
                />
            {isGameOver && (
              <GameOverModal scenes={quizSummary} score={score} />
              )}
              </div>
          </>
        )
      )}
    </main>
  );
};

export default Game;
