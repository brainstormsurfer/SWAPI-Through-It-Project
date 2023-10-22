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
      <h1 style={{ color: "greenyellow" }}>{score}</h1>
      {combinedArray && combinedArray.length >= 10 ? (
        <Carousel scenes={combinedArray} />
      ) : null}
    </div>
  );
};

export default EndGame;



// import { useEffect } from "react";
// import Carousel from "./Carousel";
// const EndGame = ({ scenes, score }) => {
//   // useEffect(() => {

//     // if (scenes && scenes.length >= 10) {
//       // Extract image and score properties into separate arrays
//       const imageArray = scenes.slice(0, 9).map((item) => item?.image || "");
//       const scoreArray = scenes.slice(1, 11).map((item) => item?.score || 0);

//       // const scoreArray1 = scoreArray.map
//       // const scoreArray2 = scoreArray
//       // const scoreArray3 = scoreArray 

//       console.log("imageArray", imageArray)
//       console.log("scoreArray", scoreArray)
//       // console.log("scoreArray2",  scoreArray2.shift())
//       // console.log("scoreArray3", scoreArray3.unshift())

//       // Combine the two arrays into a single array with 10 items
//       const combinedArray = Array.from({ length: 10 }, (_, index) => ({
//         image: imageArray[index],
//         score: scoreArray[index],
//       }));

//       // Pass the combinedArray to Carousel
//       // You may want to perform additional checks before rendering Carousel
//       // to ensure that all properties are valid
//   //     console.log("combinedArray", combinedArray);
//   //   }
//   // }, [scenes]);
  
//   return (
//     <div className="endgame-container">
//       <h1 style={{color: "greenyellow"}}>{score}</h1>
//       <Carousel scenes={scenes} />
//     </div>
//   );
// };

// export default EndGame;