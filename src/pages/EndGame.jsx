import { useEffect } from "react";
import Carousel from "../components/Carousel";
import { useGameContext } from "../components/context";
import ErrorPage from "./ErrorPage";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const EndGame = () => {
  // const navigate = useNavigate();
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
              onClick={refreshPage}
              // onClick={() => {
              //   navigate("quiz");
              // }}
            >
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
