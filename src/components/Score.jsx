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

    const timeout2 = setTimeout(() => {
      setIsQuizCounterChanged(false);
    }, 3000);

    return () => clearTimeout(timeout2);
  }, [quizCounter]);

  useEffect(() => {
    if (quizCounter === 0 && !finalEffect) {
      setFinalEffect(true);
      const timeout3 = setTimeout(() => {
       setFinalEffect(false);
      }, 3000); 
      return () => clearTimeout(timeout3);
    } 
    console.log("finalEffect",finalEffect)
console.log("quizCounter",quizCounter)
  }, [quizCounter]);

  return (
    <div className={(quizCounter === 0 && !finalEffect) ? "" : "score"}>
      <h2 className={`${quizCounter > 0 ? "" : "shrink-vertical"}`}>Score</h2>
      <h2
        className={`score-value container-left ${
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
