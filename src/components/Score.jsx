import React, { useEffect, useState } from 'react';

const Score = ({ score, quizCounter }) => {
  const [isScoreChanged, setIsScoreChanged] = useState(false);
  const [isQuizCounterChanged, setIsQuizCounterChanged] = useState(true);

  // Effect for score change
  useEffect(() => {
    setIsScoreChanged(true);

    const timeout = setTimeout(() => {
      setIsScoreChanged(false);
    }, 3000); // Assuming 3000ms is the duration of your green effect

    return () => clearTimeout(timeout);
  }, [score]);

  // Effect for quizCounter change
  useEffect(() => {
    setIsQuizCounterChanged(true);

    const timeout = setTimeout(() => {
      setIsQuizCounterChanged(false);
    }, 3000); // Assuming 3000ms is the duration of your red effect

    return () => clearTimeout(timeout);
  }, [quizCounter]);

  return (
    <div className="score">
      <h2 className={`${quizCounter > 0 ? '' : 'shrink-vertical'}`}>Score</h2>
      <h2 className={`score-value ${quizCounter > 0 ? (isScoreChanged ? 'greenEffect' : (isQuizCounterChanged ? 'redEffect' : '')) : 'shrink-horizontal'}`}>
        {score}
      </h2>
    </div>
  );
};

export default Score;
