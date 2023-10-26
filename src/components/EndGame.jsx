import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Loading from "./Loading";
import '../styles/welcome.css'
const EndGame = () => {
  const { state } = useGameContext();
  const { score, quizSummary } = state;
  const [combinedArray, setCombinedArray] = useState([]);

  useEffect(() => {
    if (quizSummary && quizSummary.length >= 10) {
      const imageArray = quizSummary.slice(0, 9).map((scene) => scene?.image || "");
      const posterArray = quizSummary.slice(0, 9).map((scene) => scene?.poster || "");
      const scoreArray = quizSummary.slice(1, 11).map((scene) => scene?.sceneScore || 0);

      const mergedArrays = Array.from({ length: 10 }, (_, index) => ({
        image: quizSummary[index]?.image || "",
        score: quizSummary[index + 1]?.score || 0,
        poster: quizSummary[index]?.poster || "",
      }));

      setCombinedArray(mergedArrays);
    }
  }, [quizSummary]);

  return (
    <div className="endgame-container">
       <div>
        <button className="btn-start-endgame pulse-endgame">Start New Game</button>
      </div>
      <div className="endgame-score">
      <h1>Final Score :  {score} <span>pts.</span></h1>
      </div>
      {combinedArray && combinedArray.length >= 10 ? (
        <Carousel scenes={combinedArray} />
        ) : <Loading />}
    </div>
  );
};

export default EndGame;
