import data from "../api/data.json";

import gameReducer from "./reducer";

import {
  useMemo,
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";

import {
  SET_QUIZ_SCENES,
  SET_DISPLAYED_SCENE,
  // SET_SCORE,
  LOADING,
  // SET_QUIZ_SUMMARY,
  // SET_QUIZ_COUNTER,
  // GAME_OVER,
} from "./ACTIONS";

import { getRandomScene } from "./utils";

const initialState = {
    isLoading: true,
    displayedScene: null,
    score: 0,
    counter: 10,
    quizSummary: [], 
    isGameOver: false, 
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const fetchDataAndInitialize = () => {
    dispatch({ type: LOADING });
    const allScenes = data.reduce((accumulator, movie) => {      
      const sceneObject = movie.scenes.map((scene) => {
        return ({
          ...scene,
          film: movie.title,
          poster: movie.poster
        });
      });
      return accumulator.concat(sceneObject);
    }, []); 
    


    dispatch({ type: SET_QUIZ_SCENES, payload: { quizScenes: allScenes } });

    if (allScenes.length > 0) {
      const displayedScene = getRandomScene(allScenes)
      dispatch({ type: SET_DISPLAYED_SCENE, payload: displayedScene });
    } else {
      throw new Error("Failed to fetch data")
    }
  };

  useEffect(() => {
    fetchDataAndInitialize();
  }, []);

const memoizedValues = useMemo(() => ({
  state,
  dispatch,
}), [state, dispatch]);

return (
  <GameContext.Provider value={memoizedValues}>
    {children}
  </GameContext.Provider>
);

};

const GameContext = createContext();

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
// export const useGameContext = () => useContext(GameContext);