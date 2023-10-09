import { nanoid } from "nanoid";
// import { useScenes } from './ScenesContext';
import { useState, useEffect } from "react";

// import { nanoid } from "nanoid";
// import { useScenes } from './ScenesContext';

const Filmbar = ({getRandomScene}) => {
  const [logos, setLogos] = useState([]);

  // const { getRandomScene } = useScenes();

  const altToRomanNumeral = (altText) => {
    console.log("altText", altText)
    const altToRomanMap = {
      episode01: 'I',
      episode02: 'II',
      episode03: 'III',
      episode04: 'IV',
      episode05: 'V',
      episode06: 'VI',
      episode07: 'VII',
      episode08: 'VIII',
      episode09: 'IX',
    };
  
    console.log("altToRomanMap[altText]", altToRomanMap[altText])

      return altToRomanMap[altText];

  };
  
  useEffect(() => {
    const logoArr = [];
    for (let i = 0; i < 9; i++) {
      logoArr.push({
        id: nanoid(),
        src: `../../src/assets/films/logo_episode0${i + 1}.png`,
        alt: `episode0${i + 1}`,
      });
    }

    setLogos(logoArr);
  }, []);

  return (
    <nav className="main-nav">
      {logos && (
        <ul>
          {logos.map((logo) => {
            // const isCurrentFilm = doesFilmTitleContainAlt(displayedFilm, logo.alt);

            return (
              <li key={logo.id}>
                <img
                  className="logo"
                  src={logo.src}
                  alt={logo.alt}
                  onClick={() => {getRandomScene(altToRomanNumeral(logo.alt))}} />
                    {/* () => {
                    handleLogoClick(
                      logo.alt,
                       isCurrentFilm,
                       getRandomScene
                       ); }
                       Pass isCurrentFilm for scoring
                  }
                /> */}
                {/* {isCurrentFilm && <span> (Current Film)</span>} */}
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};


export default Filmbar;