import { useState, useEffect } from "react";
import { useGameContext } from "../components/context";

const Header = () => {
  const {state: { score, isGameOver, isLoading } } = useGameContext();

  useEffect(() => {
    if (isGameOver) {
        const delay = setTimeout(() => {
         setIsFadeOutEffectOver(true)
        }, 7000);
        return () => clearTimeout(delay);
      }
  }, [isGameOver])

  const [isFadeOutEffectOver, setIsFadeOutEffectOver] = useState(false)

  return (
    <header>
      {!isGameOver || !isFadeOutEffectOver ? (
    // <h4 className={isGameOver ? "quiz-title into_black" : "quiz-title"}>
       <h4 className={`quiz-title ${!isGameOver ? isLoading ? "outta_black" : "" : "into_black"}`}>
        The Ultimate
          <span className="special-s">S</span>
          <span className="span">tar wars</span> Quiz
        </h4>
      ) : (
        <div className="endgame-score">
          <h1>
            Final Score : {score}
            <span>pts.</span>
          </h1>
        </div>
      )}
    </header>
  );
};

export default Header;
