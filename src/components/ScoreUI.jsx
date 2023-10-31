import React, { useState, useEffect } from "react";
import { useGameContext } from "./context";

const ScoreUI = () => {
  const [finalEffect, setFinalEffect] = useState(false);
  const [difference, setDifference] = useState(0);
  const [effect, setEffect] = useState("");
  
  const { state: { score, counter } } = useGameContext();  

  useEffect(() => {    
    const currentDifference = score - difference;
    setDifference((prevDifference) => {
      if (currentDifference > prevDifference) {
        if (counter > 0) {
          setEffect("greenEffect");
        } else {
          setEffect("final-green-shrink");
        }
      } else {
        if (counter > 0) {
          setEffect("redEffect");
        } else if (counter === 0) {
          setEffect("final-red-shrink");
        }
      }
      return currentDifference;
    });

    const timeout = setTimeout(() => {
      setEffect("");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [score, counter]);

  useEffect(() => {
    if (counter === 0 && !finalEffect) {
      setFinalEffect(true);
      const timeout3 = setTimeout(() => {
        setFinalEffect(false);
      }, 3000);
      return () => clearTimeout(timeout3);
    }
  }, [counter]);

  return (
    <div className={counter === 0 && !finalEffect ? "dis-play" : "score"}>
      <h2 className={`${counter > 0 ? "" : "shrink-vertical"}`}>Score</h2>
      <h2 className={`score-value container-left ${effect}`}>{score}</h2>
    </div>
  );
};

export default ScoreUI;