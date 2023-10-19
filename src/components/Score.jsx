import React, { useState, useEffect } from "react";

const Score = ({ score, quizCounter }) => {
  const [finalEffect, setFinalEffect] = useState(false);
  const [prevScore, setPrevScore] = useState(0);
  const [difference, setDifference] = useState(0);
  const [effect, setEffect] = useState("");


  useEffect(() => {
    
    setDifference((prevDifference) => {
      const currentDifference = score - prevScore;
      if (currentDifference > prevDifference) {
        if (quizCounter > 0) {
          setEffect("greenEffect");
        } else {
          setEffect("final-green-shrink");
        }
      } else {
        if (quizCounter > 0) {
          setEffect("redEffect");
        } else {
          setEffect("final-red-shrink");
        }
      }

      return currentDifference;
    });

    const timeout = setTimeout(() => {

      setEffect("");
      setIsScoreChanged(false);
      setIsQuizCounterChanged(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [score, quizCounter]);

  useEffect(() => {
    if (quizCounter === 0 && !finalEffect) {
      setFinalEffect(true);
      const timeout3 = setTimeout(() => {
        setFinalEffect(false);
      }, 3000);
      return () => clearTimeout(timeout3);
    }
  }, [quizCounter]);

  return (
    <div className={quizCounter === 0 && !finalEffect ? "dis-play" : "score"}>
      <h2 className={`${quizCounter > 0 ? "" : "shrink-vertical"}`}>Score</h2>
      <h2 className={`score-value container-left ${effect}`}>{score}</h2>
    </div>
  );
};

export default Score;