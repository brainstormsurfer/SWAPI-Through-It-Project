import { useEffect } from "react";
import {Loading, CounterUI, ScoreUI, Filmbar, DisplayImage, EndGame} from './index'
import { GAME_OVER, LOADING,  } from "./ACTIONS";
import { useGameContext } from "./context";

  
  const Game = () => {    
    const { state, dispatch } = useGameContext();
    
    const {
      isLoading,
       displayedScene,
        counter,
         quizSummary,
          isGameOver,
        } = state; 
    
        console.log("counter", counter)
        console.log("counter", counter)
  
      useEffect(() => { 
          // a delay for an endgame effects (score and counter animations)
      if (counter === 0) {
            const delay1 = setTimeout(() => {
              dispatch({ type: GAME_OVER, payload: true });}, 
              5000);
            return () => clearTimeout(delay1);
          }})

    useEffect(() => {
      console.log("IN GAME displayedScene", displayedScene)
      if (displayedScene) {
        const delay2 = setTimeout(() => {
          dispatch({ type: LOADING, payload: false });
        }, 6000);
        return () => clearTimeout(delay2);
      }
    }, [displayedScene]);
  
    return (
      <>
        {!displayedScene ? (
          <Loading />
        ) : (
          displayedScene && (
            <>
              <h4 className="quiz-title">
                The Ultimate
                <span className="special-s">S</span>
                <span className="span">tar Wars</span> Quiz
              </h4>
              {!isGameOver ? (
                <>
              <nav className="main-nav">
                <Filmbar />
              </nav>
              
                <div className="showcase">
                  <ScoreUI />
                  {counter !== 0 && <DisplayImage
                    selectedScene={displayedScene}
                    isLoading={isLoading}
                  />}
                  <CounterUI />
                </div>
                </>
              ) : (
                  <EndGame scenes={quizSummary} />
                  )}
            </>
          )
        )}
      </>
    );
  };
  
  export default Game;