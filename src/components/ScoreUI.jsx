import { useState, useEffect } from "react";
import { useGameContext } from "./context";

const ScoreUI = () => {
  const [finalScoreEffect, setFinalScoreEffect] = useState(false);
  const [difference, setDifference] = useState(0);
  const [scoreEffect, setScoreEffect] = useState("");
  
  const { state: { score, counter } } = useGameContext();  

  useEffect(() => {   
    const currentDifference = score - difference;
    setDifference((prevDifference) => {
      if (currentDifference > prevDifference) {
        if (counter > 0) {
          setScoreEffect("greenScoreEffect");
        } else {
          setScoreEffect("final-green-effect");
        }
      } else {
        if (counter > 0) {
          setScoreEffect("redScoreEffect");
        } else {
          setScoreEffect("final-red-effect");
        }
      }
      return currentDifference;
    });

    const timeout = setTimeout(() => {
      setScoreEffect("");
    }, 2900);

    return () => {
      clearTimeout(timeout);
    };
  }, [counter]);

  useEffect(() => {
    if (counter === 0 && !finalScoreEffect) {
      setFinalScoreEffect(true);
      const timeout3 = setTimeout(() => {
        setFinalScoreEffect(false);
      }, 5000);
      
      return () => clearTimeout(timeout3);
    }
  }, [score]);

  return (
    <div className={counter === 0 && finalScoreEffect ? "dis-play" : "score-container"}>
      <h2 className={`score-title ${counter > 0 ? "" : "effect-vertical"}`}>Score</h2>
      <h2 className={`score-value ${scoreEffect}`}>{score}</h2>
    </div>
  );
};

export default ScoreUI;
/* 
Score in special s*/