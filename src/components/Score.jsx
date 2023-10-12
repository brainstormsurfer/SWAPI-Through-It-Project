import React, { useState, useEffect } from "react";

const Score = ({ score, quizCounter }) => {
  const [isScoreChanged, setIsScoreChanged] = useState(false);
  const [isQuizCounterChanged, setIsQuizCounterChanged] = useState(true);
  const [finalEffect, setFinalEffect] = useState(false);

  useEffect(() => {
    setIsScoreChanged(true);

    const timeout = setTimeout(() => {
      setIsScoreChanged(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [score]);

  useEffect(() => {
    setIsQuizCounterChanged(true);

    const timeout = setTimeout(() => {
      setIsQuizCounterChanged(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [quizCounter]);

  useEffect(() => {
    if (quizCounter === 0 && !finalEffect) {
      setFinalEffect(true);
      const timeout = setTimeout(() => {
        setFinalEffect(false);
      }, 3000); // Assuming 3000ms is the duration of your final effect
      return () => clearTimeout(timeout);
    }
  }, [quizCounter, finalEffect]);

  return (
    <div className="score">
      <h2 className={`${quizCounter > 0 ? "" : "shrink-vertical"}`}>Score</h2>
      <h2
        className={`score-value ${
          quizCounter > 0
            ? isScoreChanged
              ? "greenEffect"
              : isQuizCounterChanged
              ? "redEffect"
              : ""
            : finalEffect
            ? isScoreChanged
              ? "final-green-shrink"
              : "final-red-shrink"
            : ""
        }`}
      >
        {score}
      </h2>
    </div>
  );
};

export default Score;
