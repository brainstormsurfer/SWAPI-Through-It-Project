import { useEffect, useState } from "react";
import Carousel from "./Carousel";

const EndGame = ({ scenes, score }) => {
  const [combinedArray, setCombinedArray] = useState([]);

  useEffect(() => {
    if (scenes && scenes.length >= 10) {
      // Ensure that scenes is not undefined and contains at least 10 items
      // Extract image and score properties into separate arrays
      const imageArray = scenes.slice(0, 9).map((item) => item?.image || "");
      const posterArray = scenes.slice(0, 9).map((item) => item?.poster || "");
      const scoreArray = scenes.slice(1, 11).map((item) => item?.score || 0);

      // Combine the two arrays into a single array with 10 items
      const mergedArrays = Array.from({ length: 10 }, (_, index) => ({
        image: scenes[index]?.image || "",
        score: scenes[index + 1]?.score || 0,
        poster: scenes[index]?.poster || "",
      }));

      setCombinedArray(mergedArrays);
    }
  }, [scenes, score]);

  return (
    <div className="endgame-container">
      <div className="endgame-score">
      <h1>Final Score :  {score} <span>pts.</span></h1>
      </div>
      {combinedArray && combinedArray.length >= 10 ? (
        <Carousel scenes={combinedArray} />
        ) : null}
    </div>
  );
};

export default EndGame;
