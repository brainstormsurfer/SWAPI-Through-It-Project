import { useState, useEffect } from "react";
import Hint from "./Hint";
import Loading from "./Loading";
// import EndGame from "./EndGame";
const DisplayImage = ({ selectedScene, isLoading }) => {

  if (isLoading && !selectedScene) {
    return <Loading />;
  }

  return (
    !isLoading && (
      <div className="scene-container">
        {selectedScene && (
          <>
            <img
              // className={"scene"}
              src={selectedScene?.image}
              alt=""
            />
            <Hint description={selectedScene?.description} />
          </>
        )}
      </div>
    )
  );
};

export default DisplayImage;
