import { useState, useEffect } from "react";
import { useGameContext } from "../context/context";
import './styles/sharedUI.css'
import './styles/ScoreUI.css'

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
        (counter > 0) ?
          setScoreEffect("redScoreEffect") :        
          setScoreEffect("final-red-effect");  
      }
      return currentDifference;
    });

    const timeout = setTimeout(() => {
         if (counter > 0) {
         setScoreEffect("");
        }
       }, 2500);

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
  }, [counter, score]);

  return (
    <div className={`score-container ${counter === 0 && finalScoreEffect === "" ? "dis-play" : "shared-container"}`}>
      <h2 className={`score-title shared-title ${counter > 0 ? "" : "effect-vertical"}`}>Score</h2>
      <h2 className={`score-value shared-value ${scoreEffect}`}>{score}</h2>
    </div>
  );
};

export default ScoreUI;
/* 
Score in special s*/