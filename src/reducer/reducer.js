import {
  SET_QUIZ_SCENES,
  SET_DISPLAYED_SCENE,
  SET_QUIZ_SUMMARY,
  DECREMENT_COUNTER,
  INCREMENT_SCORE,
  LOADING,
  GAME_OVER,
} from "../components/ACTIONS";

const gameReducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case GAME_OVER: {
      console.log("GAME_OVER action dispatched with payload:", payload);
      return { ...state, isGameOver: payload };
    }
    case LOADING: {
      console.log("LOADING action dispatched with payload:", payload);
      return { ...state, isLoading: payload };
    }

    case SET_QUIZ_SCENES: {
      return {
        ...state,
        quizScenes: payload.quizScenes,
      };
    }
    case SET_DISPLAYED_SCENE:
      return {
        ...state,
        displayedScene: payload,
      };

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
      const sceneWithScoringEffect = {
        ...state.displayedScene,
        score: payload.sceneScore,
      };
      const updatedQuizSummary = [...state.quizSummary, sceneWithScoringEffect];

      return {
        ...state,
        quizSummary: updatedQuizSummary,
      };

    default:
      throw new Error(`No matching action type: ${action.type}`);
  }
};

export default gameReducer;
