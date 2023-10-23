import { nanoid } from "nanoid";
import { useState, useEffect, quizCounter } from "react";

const Filmbar = ({ getRandomScene, decrementCounter, quizCounter }) => {
  const [logos, setLogos] = useState([]);
  // const [delayedChars, setDelayedChars] = useState([]);
  const gameOverChars = ["G", "A", "M", "E", "", "O", "V", "E", "R", ""];

console.log("quizCounter", quizCounter)

  const altToRomanNumeral = (altText) => {
    // console.log("altText", altText)
    const altToRomanMap = {
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
    return altToRomanMap[altText];
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
          {quizCounter !== 0 ? (
            logos.map((logo) => {
              // const isCurrentFilm = doesFilmTitleContainAlt(displayedFilm, logo.alt);
              return (
                <li key={logo.id}>
                  <img
                    className="film-logo"
                    src={logo.src}
                    alt={logo.alt}
                    onClick={() => {
                      decrementCounter();
                      getRandomScene(altToRomanNumeral(logo.alt));
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



function SpinningLetters({ gameOverChars }) {
  const [delayedChars, setDelayedChars] = useState([]);

useEffect(() => {
  const delay = 0.25; 

  const delayedChars = gameOverChars.map((char, index) => (
    <li
      key={nanoid()}
      className="spin-letter"
      style={{ animationDelay: `${index * delay}s` }}
    >
      <h1>{char}</h1>
    </li>
  ));

  setDelayedChars(delayedChars);
}, [gameOverChars]);

return <ul className="spinning-letters">{delayedChars}</ul>; 
}