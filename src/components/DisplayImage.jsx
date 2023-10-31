import Hint from "./Hint";
import Loading from "./Loading";
import { useGameContext } from "./context";

const DisplayImage = () => {
  const { state : {counter, displayedScene}} = useGameContext();  
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
