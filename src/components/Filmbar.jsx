import './Filmbar.css'

import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { useGameContext } from "../context/context";
import { INCREMENT_SCORE, DECREMENT_COUNTER, SET_DISPLAYED_SCENE, SET_QUIZ_SCENES, SET_QUIZ_SUMMARY } from "./ACTIONS";
import SpinningLetters from "./SpinningLetters";
import { filterScenesHandler, getRandomScene } from "../utils/utils";

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
    
    const sceneWithScoringEffect = {
      ...displayedScene,
      sceneScore: quizSummaryScore,
    };
    
    dispatch({ type: SET_QUIZ_SUMMARY, payload: sceneWithScoringEffect });
    
    if (counter > 1) {
    const filteredScenes = filterScenesHandler(quizScenes, displayedScene)
    dispatch({ type: SET_QUIZ_SCENES, payload: { quizScenes : filteredScenes } });
    const newScene = getRandomScene(filteredScenes);  
    dispatch({ type: SET_DISPLAYED_SCENE, payload: newScene });
  }
};

  useEffect(() => {
    const logoArr = [];
    for (let i = 0; i < 9; i++) {
      logoArr.push({
        id: nanoid(),        
         src: `logo-episode0${i + 1}.png`,
        //  src: `../../src/assets/logos/logo_episode0${i + 1}.png`,
        alt: `episode0${i + 1}`,
      });
    }

    setLogos(logoArr);
  }, []);



  return (
    <> 
      {logos && (
        <ul className="filmbar">
          {counter !== 0 ? (
            logos.map((logo) => {
              return (
                <li key={logo.id}>
                  <img
                    className="film-logo"
                    src={`../../assets/${logo.src}`}
                    alt={logo.alt}
                    onClick={() => {
                      handleLogoClick(logo.alt);
                    }}
                  />
                </li>
              );
            })
          ) : (          
            <SpinningLetters />
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