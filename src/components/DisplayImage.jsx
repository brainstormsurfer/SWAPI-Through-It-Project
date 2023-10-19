import { useState, useEffect } from "react";
import Hint from "./Hint";
import Loading from "./Loading";
import GameOverModal from "./GameOverModal";
const DisplayImage = ({ selectedScene, quizCounter, isLoading }) => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  useEffect(() => {
    if (quizCounter === 0) {
      const gameEnd = setTimeout(() => {
        setIsDisplayed(false);
      }, 3000);

      return () => clearTimeout(gameEnd);
    }
  }, [quizCounter]);

  if (isLoading && !selectedScene) {
    return <Loading />;
  }

  if (!isDisplayed || quizCounter <= 0) {
    return null;
  }

  return (
    <div className="scene-container">
      {selectedScene && (
        <>
          <img
            className={"scene"}
            src={selectedScene?.image}
            alt=""
          />
          <Hint description={selectedScene?.description} />
        </>
      )}
    </div>
  );
};

export default DisplayImage;