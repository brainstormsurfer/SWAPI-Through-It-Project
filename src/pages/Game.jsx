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
    if (displayedScene) {
      const delay1 = setTimeout(() => {
        dispatch({ type: LOADING, payload: false });
      }, 6000);
      return () => clearTimeout(delay1);
    } 
}, [displayedScene]);

useEffect(() => {
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
                {counter !== 0 && (
                  <DisplayImage />
                )}
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


  // useEffect(() => {
  //   console.log("IN GAME counter NO 0", counter);
  //   // a delay for an endgame effects (score and counter animations)
  //   if (counter === 0) {
  //     console.log("IN GAME counter YES 0", counter);
  //     const delay1 = setTimeout(() => {
  //       dispatch({ type: GAME_OVER, payload: true });
  //       // navigate("/summary");
  //     }, 5000);
  //         console.log("IN GAME isGameOver01", isGameOver);
  //     return () => clearTimeout(delay1);
  //   }
  // },[counter]);
