// import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { useGameContext } from "../components/context";
import { Link } from "react-router-dom";

const EndGame = () => {
  const { state: { score }} = useGameContext();
  return (
    <div className="endgame-container">
       <div>
           <button className="btn-start-endgame pulse-endgame">
                  <Link to="/">
                  Start New Game
                  </Link>
                </button>
      </div>
      <div className="endgame-score">
      <h1>Final Score :  {score}<span>pts.</span></h1>
      </div>     
        <Carousel />        
    </div>
  );
};

export default EndGame;
