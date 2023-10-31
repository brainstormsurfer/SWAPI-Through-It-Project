// import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { useGameContext } from "../components/context";
import ErrorPage from "./ErrorPage";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EndGame = () => {

  const navigate = useNavigate()

  // function refreshPage() {
  //   window.location.reload(false);
  // }

  const {
    state: { quizSummary },
  } = useGameContext();

  console.log("quizSummary", quizSummary);
  return (
    <>
      {quizSummary ? (
        <div className="endgame-container">
          <div className="button-container">         
            <button className="btn-endgame pulse-endgame"
              // onClick={refreshPage}
              // onClick={() => {navigate("quiz")}}
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
