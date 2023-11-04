import { useEffect } from "react";
import {
  Loading,
  CounterUI,
  ScoreUI,
  Filmbar,
  DisplayImage,
  EndGame,
} from "../components/index";
import { GAME_OVER, LOADING } from "../components/ACTIONS";
import { useGameContext } from "../components/context";

const Game = () => {
  const { state: {isLoading, displayedScene, counter, isGameOver}, dispatch } = useGameContext();

  useEffect(() => {
    console.log("CHECK1")
    if (displayedScene) {
      const delay1 = setTimeout(() => {
        dispatch({ type: LOADING, payload: false });
      }, 6000);
      return () => clearTimeout(delay1);
    } 
}, [displayedScene]);

useEffect(() => {
  console.log("CHECK2")
    if (counter === 0) {
      const delay2 = setTimeout(() => {
        dispatch({ type: GAME_OVER, payload: true });
      }, 5000);
      return () => clearTimeout(delay2);}          
  }, [counter]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>       
          {!isGameOver ? (
            <>
                <Filmbar />
              <div className="showcase">
                <ScoreUI />
                  <DisplayImage />
                <CounterUI />
              </div>
            </>
          ) : (
            <EndGame />
          )}
        </>
      )}
    </>
  );
};

export default Game;