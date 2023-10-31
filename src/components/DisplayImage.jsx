import Hint from "./Hint";
import Loading from "./Loading";
import { useGameContext } from "./context";

const DisplayImage = () => {
  const { state } = useGameContext();
  const {counter, displayedScene} = state; 
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
