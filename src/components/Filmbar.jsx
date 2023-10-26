import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { useGameContext } from "./context";
import { INCREMENT_SCORE, DECREMENT_COUNTER, SET_DISPLAYED_SCENE, SET_QUIZ_SCENES, GAME_OVER, SET_QUIZ_SUMMARY } from "./ACTIONS";
import SpinningLetters from "./SpinningLetters";
import { filteredScenes, getRandomScene } from "./utils";

const Filmbar = () => {

  const [logos, setLogos] = useState([]);
  const { state: { displayedScene, quizScenes, counter }, dispatch } = useGameContext();

  const handleLogoClick = (logoAlt) => {
    const clickedFilm = numToRomanHandler(logoAlt);
    let quizSummaryScore = 0; 

    if (displayedScene.film.includes(` ${clickedFilm} `)) {
      dispatch({ type: INCREMENT_SCORE });
      quizSummaryScore = 1; 
    }
    dispatch({ type: DECREMENT_COUNTER });

    // Construct the scene object for the quiz summary
    const sceneWithScoringEffect = {
      ...displayedScene,
      sceneScore: quizSummaryScore,
    };
    console.log("filmbar quizSum", sceneWithScoringEffect)

    dispatch({ type: SET_QUIZ_SUMMARY, payload: sceneWithScoringEffect });
    
    const newScene = getRandomScene(quizScenes);
    // const filteredScenes = filteredScenes(quizScenes, newScene);

    dispatch({ type: SET_DISPLAYED_SCENE, payload: newScene  });
    dispatch({ type: SET_QUIZ_SCENES, payload: {quizScenes : filteredScenes(quizScenes, newScene) } });
    
    if (counter <= 0) {
      dispatch({ type: GAME_OVER });
    }
    
  };

  useEffect(() => {
    const logoArr = [];
    for (let i = 0; i < 9; i++) {
      logoArr.push({
        id: nanoid(),
        src: `../../src/assets/logos/logo_episode0${i + 1}.png`,
        alt: `episode0${i + 1}`,
      });
    }

    setLogos(logoArr);
  }, []);



  return (
    <>
      {logos && (
        <ul>
          {counter !== 0 ? (
            logos.map((logo) => {
              return (
                <li key={logo.id}>
                  <img
                    className="film-logo"
                    src={logo.src}
                    alt={logo.alt}
                    onClick={() => {
                      handleLogoClick(logo.alt);
                    }}
                  />
                </li>
              );
            })
          ) : (          
            <SpinningLetters gameOverChars={gameOverChars} />
          )}
        </ul>
      )}
    </>
  );
};

export default Filmbar;



function numToRomanHandler (logoAltText) {
  // console.log("logoAltText", logoAltText)
  const numToRoman = {
    episode01: "I",
    episode02: "II",
    episode03: "III",
    episode04: "IV",
    episode05: "V",
    episode06: "VI",
    episode07: "VII",
    episode08: "VIII",
    episode09: "IX",
  };
  return numToRoman[logoAltText];
};