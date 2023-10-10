import Filmbar from "./Filmbar";
import DisplayImage from "./DisplayImage";
import Score from "./Score";
import Loading from "./Loading";

import { useScenes } from "./ScenesContext";
import { useEffect, useState } from "react";

const Game = () => {
  const { getRandomScene, displayedScene, score, isLoading } = useScenes();
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      { isLoading ? (
        <Loading />
      ) : (
        <>
          <nav className="main-nav">
            <Score score={score} />
            <Filmbar getRandomScene={getRandomScene} />
          </nav>
          <DisplayImage selectedScene={displayedScene} />
        </>
      )}
    </>
  );
};

export default Game;
