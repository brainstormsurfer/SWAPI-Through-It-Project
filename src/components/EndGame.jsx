import Carousel from "./Carousel";
import { useGameContext } from "./context";
import ErrorPage from "../pages/ErrorPage";
import { Link } from "react-router-dom";

const EndGame = () => {
  const { state: {quizSummary} } = useGameContext()

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  }
  return (
    <>
      {quizSummary ? (
        <div className="endgame-container">
          <div className="button-container">
            <button
              className="btn-endgame pulse-endgame"
              onClick={refreshPage} >
              <Link to="/quiz">
              Start New Game
              </Link>
            </button>
          </div>
          <Carousel />
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default EndGame;
