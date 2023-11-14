import './styles/Showcase.css'

import Hint from "./Hint";
import { useGameContext } from "../context/context";

const Showcase = () => {
  
  const {
    state: { counter, displayedScene },
  } = useGameContext();
    // console.log("SHOWCASE displayedScene: ", displayedScene)

  return (
    displayedScene && counter > 0 ? (
      <>
        <div className="scene-container">
        <img src={displayedScene?.image} alt="" />
        <Hint />
        </div>
      </> ) : (
          <div className="scene-container scene-endgame">
          <img className="vanish" src={displayedScene?.image} alt="" />          
          </div>
      )
    )
};

export default Showcase;
