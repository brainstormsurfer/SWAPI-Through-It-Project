import { useState } from "react";
import React from 'react'

const SpinningLetters = () => {
    const [delayedChars, setDelayedChars] = useState([]);
    const gameOverChars = ["G", "A", "M", "E", "", "O", "V", "E", "R", ""];

  useEffect(() => {
    const delay = 0.25; 
  
    const delayedChars = gameOverChars.map((char, index) => (
      <li
        key={nanoid()}
        className="game-over-letter"
        style={{ animationDelay: `${index * delay}s` }}
      >
        <h1>{char}</h1>
      </li>
    ));
  
    setDelayedChars(delayedChars);
  }, [gameOverChars]);
  
  return <ul>{delayedChars}</ul>; 
  }
export default SpinningLetters