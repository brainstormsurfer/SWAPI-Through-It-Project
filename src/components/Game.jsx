import React, { useState, useEffect, useRef } from "react";
import Loading from "./Loading";
import Filmbar from "./Filmbar";
import DisplayImage from "./DisplayImage";
import Score from "./Score";
import QuizCounter from "./QuizCounter";
import EndGame from "./EndGame";
import { useScenes } from "./ScenesContext";

const Game = () => {
  const { getRandomScene, displayedScene, score } = useScenes();
  const [isLoading, setIsLoading] = useState(true);
  const [quizCounter, setQuizCounter] = useState(10);
  const [quizSummary, setQuizSummary] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
 
  let prevScore = 0;

  const decrementCounter = () => {
    if (quizCounter > 0) {
      setQuizCounter(quizCounter - 1);
    }
  };

  useEffect(() => {
      // a delay for a new game effect (spinner)
    if (displayedScene && getRandomScene) {
      const delay2 = setTimeout(() => {
        setIsLoading(false);
      }, 6000);
      return () => clearTimeout(delay2);
    }
  }, [displayedScene]);

  useEffect(() => {
    // console.log("score1", score);
    // console.log("prevScore1", prevScore);
    // console.log("displayedScene1", displayedScene);
    if (score > prevScore) {
      prevScore = 1;
    } else {
      prevScore = 0;
    }
  }, [score]);

  useEffect(() => { 
    // a delay for an endgame effects (score and counter animations)
    if (quizCounter === 0) {
      const delay1 = setTimeout(() => {
        setIsGameOver(true);
      }, 4000);
      return () => clearTimeout(delay1);
    }})

    // setting quiz summary of each included scene its score (for endgame screen dots effect)
    useEffect(() => {
      if (quizCounter === 10) {
       setQuizSummary([displayedScene])
      }
      // Add the current scene to quizSummary when the player answers a question
      // console.log("displayedScene2", displayedScene);
      // console.log("quizCounter2", quizCounter);

      if (quizSummary.length <= 10) {
      if (displayedScene && quizCounter < 10) {
        // Make sure we only add 10 items to quizSummary
        // console.log("score2", score);
        // console.log("prevScore2", prevScore);
        const sceneWithScoringEffect = { ...displayedScene, score: prevScore };
        // console.log("sceneWithScoringEffect", sceneWithScoringEffect)
        setQuizSummary((prevSummary) => [...prevSummary, sceneWithScoringEffect]);
        // console.log("quizSummary",quizSummary)
      }
    }
  }, [quizCounter, displayedScene]);

  return (
    <>
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
            {!isGameOver ? (
              <>
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
              </div>
              </>
            ) : (
                <EndGame scenes={quizSummary} score={score} />
                )}
          </>
        )
      )}
    </>
  );
};

export default Game;