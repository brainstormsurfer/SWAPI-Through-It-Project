// import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { useGameContext } from "./context";

const EndGame = () => {
  const { state: { score }} = useGameContext();
  return (
    <div className="endgame-container">
       <div>
        <button className="btn-start-endgame pulse-endgame">Start New Game</button>
      </div>
      <div className="endgame-score">
      <h1>Final Score :  {score}<span>pts.</span></h1>
      </div>     
        <Carousel />        
    </div>
  );
};

export default EndGame;
