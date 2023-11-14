import data from "../api/data.json";

import gameReducer from "../reducer/reducer";

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
  LOADING,
} from "../components/ACTIONS";

import { getRandomScene } from "../util/utils";

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
    dispatch({ type: LOADING, payload: true });

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
    dispatch({ type: LOADING, payload: true });
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
