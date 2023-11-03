import Hint from "./Hint";
import { useGameContext } from "./context";

const DisplayImage = () => {
  const {
    state: { counter, displayedScene },
  } = useGameContext();

  return (
    displayedScene && counter > 0 ? (
      <>
        <div className="scene-container">
        <img src={displayedScene?.image} alt="" />
        <Hint description={displayedScene?.description} />
        </div>
      </> ) : (
          <div className="scene-container scene-endgame">
          <img className="vanish" src={displayedScene?.image} alt="" />          
          </div>
      )
    )
};

export default DisplayImage;
