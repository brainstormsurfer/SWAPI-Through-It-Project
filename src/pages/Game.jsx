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
import { useNavigate } from "react-router-dom";

const Game = () => {
  const { state, dispatch } = useGameContext();
  const navigate = useNavigate();
  const { isLoading, displayedScene, counter, quizSummary, isGameOver } = state;

  useEffect(() => {
    // a delay for an endgame effects (score and counter animations)
    if (counter === 0) {
      const delay1 = setTimeout(() => {
        dispatch({ type: GAME_OVER, payload: true });
        navigate("/summary");
      }, 5000);
      return () => clearTimeout(delay1);
    }
  },[counter]);

  useEffect(() => {
    console.log("IN GAME displayedScene", displayedScene);
      // dispatch({ type: LOADING, payload: true});
    if (displayedScene) {
      const delay2 = setTimeout(() => {
        dispatch({ type: LOADING, payload: false });
      }, 6000);
      return () => clearTimeout(delay2);
    }
  }, [displayedScene]);

  return (
    <>
      {isLoading && !displayedScene ? (
        <Loading />
      ) : (
        <>
          {/* <h4 className={isGameOver ? "quiz-title into_black" : "quiz-title"}>
            The Ultimate
            <span className="special-s">S</span>
            <span className="span">tarwars</span> Quiz
          </h4> */}
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
