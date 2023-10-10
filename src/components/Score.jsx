import React, { useEffect, useState } from 'react';

const Score = ({ score }) => {
  const [isChanged, setIsChanged] = useState(true);

  useEffect(() => {
    setIsChanged(!isChanged);
  }, [score]);

  return (
    <div className='score'>
      <h2>Score</h2>
      <h2 className={`score-value ${isChanged ? 'greenEffect' : 'blueEffect'}`}>
        {score}
      </h2>
    </div>
  );
};

export default Score;
