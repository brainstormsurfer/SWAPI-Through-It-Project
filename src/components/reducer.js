import {
  SET_QUIZ_SCENES,
  SET_DISPLAYED_SCENE,
  SET_QUIZ_SUMMARY,
  DECREMENT_COUNTER,
  INCREMENT_SCORE,
  LOADING,
  GAME_OVER,
} from "./ACTIONS";


const gameReducer = (state, action) => {
  const {payload} = action
  switch (action.type) {
    
    case LOADING:
      return { ...state, isLoading: payload, };

    case SET_QUIZ_SCENES: {            
  return {
    ...state,
    quizScenes: payload.quizScenes
        };

    }
    case SET_DISPLAYED_SCENE:
      return {
        ...state,
        displayedScene: payload };

    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };

      case SET_QUIZ_SUMMARY:
        const sceneWithScoringEffect = { ...state.displayedScene, score: payload.sceneScore };
        const updatedQuizSummary = [...state.quizSummary, sceneWithScoringEffect];
  
        return {
          ...state,
          quizSummary: updatedQuizSummary,
        };

    case GAME_OVER:
      return {
        ...state,
        isGameOver: true,
      };

    default:
      throw new Error(`No matching action type: ${action.type}`);
  }
};

export default gameReducer;