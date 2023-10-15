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

  return (
    <>
      {isLoading && !selectedScene ? (
        <Loading />
      ) : (
        // <div className={`scene-container ${isDisplayed ? "" : "expand"}`}>
        <div className={"scene-container"}>
          {isDisplayed ? (
            <>
              {quizCounter > 0 ? (
                <>
                  {selectedScene && (
                    <img
                      className={`scene ${isDisplayed ? "" : "expand"}`}
                      src={selectedScene?.image}
                      alt=""
                    />
                  )}
                  {quizCounter > 0 && <Hint description={selectedScene?.description} />}
                </>
              ) : (
                // <div className={`scene expand`}>
                <div>
                <Loading />
              </div>
               
              )}
            </>
          ) : (
            <GameOverModal />
          )}
        </div>
      )}
    </>
  );
};

export default DisplayImage;
