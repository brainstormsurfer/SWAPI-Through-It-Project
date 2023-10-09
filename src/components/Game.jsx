// import React, { useState } from 'react';
import Filmbar from './Filmbar';
import DisplayImage from './DisplayImage';
import Score from './Score';
import { useScenes } from './ScenesContext';

const Game = () => {
  const { getRandomScene, displayedScene, score } = useScenes();
  
    return (
    <div>
      <Score score={score}/>
      <Filmbar getRandomScene={getRandomScene}/>
      <DisplayImage selectedScene={displayedScene}/>
    </div>
  );
};

export default Game;
