// import { useEffect } from "react";
// import { LOADING } from "./ACTIONS";
import Hint from "./Hint";
// import Loading from "./Loading";
import { useGameContext } from "./context";

const DisplayImage = () => {
  const { state : { counter, displayedScene }} = useGameContext();  

//   useEffect(() => {
//     if (displayedScene) {
//       const delay1 = setTimeout(() => {
//         dispatch({ type: LOADING, payload: false });
//       }, 6000);
//       return () => clearTimeout(delay1);
//     } 
// }, []);

  return (
    counter > 0 && (
      <div className="scene-container">
        {displayedScene && (
          <>
            <img
              src={displayedScene?.image}
              alt=""
            />
            <Hint description={displayedScene?.description} />
          </>
        )}
      </div>
    )
  );
};

export default DisplayImage;
