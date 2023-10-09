// import { useScenes } from './ScenesContext'; // Import useScenes

const DisplayImage = ({selectedScene}) => {


  return (
    <div className="scene-container">
      {/* <button onClick={getRandomScene()}>NEXT RANDOM SCENE</button> */}
      {selectedScene && (
        <div>
          <img className="scene" src={selectedScene.image} alt="Random" />
          <h4>{selectedScene.description}</h4>
          <p>From: {selectedScene.film}</p>
        </div>
      )}
    </div>
  );
};

export default DisplayImage;


// import { useScenes } from './ScenesContext'; // Import useScenes

// const DisplayImage = ({ score }) => {
//   const { selectedScene, getRandomScene } = useScenes(); // Use useScenes

//   return (
//     <div className="scene-container">
//       <button onClick={getRandomScene}>NEXT RANDOM SCENE</button>
//       {selectedScene && (
//         <div>
//           <img className="scene" src={selectedScene.image} alt="Random" />
//           <h4>{selectedScene.description}</h4>
//           <p>From: {selectedScene.film}</p>
//           <p>Score: {score}</p> {/* Display the score */}
//         </div>
//       )}
//     </div>
//   );
// };


// export default DisplayImage;

// import React from 'react';
// import useRandomScene from '../hooks/useRandomScene'; // Import the custom hook
// import data from '../api/data.json';

// const DisplayImage = () => {
//   const { displayedScene, displayedFilm, getRandomScene } = useRandomScene(data);

//   return (
//     <div>
//       <nav className="main-nav">
//         <ul>
//           {logos.map((logo) => (
//             <li key={nanoid()}>
//               <img
//                 className="logo"
//                 src={logo}
//                 alt=""
//                 onClick={() => handleFilmButtonClick(logo)}
//               />
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <div>
//         <p>Score: {score}</p>
//       </div>
//     </div>
//   );
// };

// export default DisplayImage;


// import React, { useState, useEffect } from 'react';
// import data from "../api/data.json"; 
// console.log(data)

// const DisplayImage = () => {
//   const [scenes, setScenes] = useState([]);
//   const [displayedScene, setDisplayedScene] = useState(null);
//   const [displayedFilm, setDisplayedFilm] = useState(null);

//   useEffect(() => {
//     // Flatten the scenes from all movies into a single array
//     const allScenes = data.reduce((accumulator, movie) => {
//       const scenesWithFilm = movie.scenes.map((scene) => ({
//         ...scene,
//         film: movie.title // Attach the film title to each scene
//       }
//       ));
//       return accumulator.concat(scenesWithFilm);
//     }, []);

//     setScenes(allScenes);

//     // Display the first scene when the component mounts
//     if (allScenes.length > 0) {
//       const randomIndex = Math.floor(Math.random() * allScenes.length);
//       const selectedScene = allScenes[randomIndex];
//       console.log("random scene", selectedScene);

//       // Filter out the selected scene from the scenes array
//       const newScenes = allScenes.filter((scene) => scene !== selectedScene);

//       setScenes(newScenes);
//       setDisplayedScene(selectedScene);
//       setDisplayedFilm(selectedScene.film); // Set the displayed film
//     }
//   }, []);

//   const getRandomScene = () => {
//     if (scenes.length === 0) {
//       setDisplayedScene(null); // temp
//       setDisplayedFilm(null); // temp
//       return;
//     }

//     const randomIndex = Math.floor(Math.random() * scenes.length);
//     const selectedScene = scenes[randomIndex];
//     console.log("random scene", selectedScene);

//     // Filter out the selected scene from the scenes array
//     const newScenes = scenes.filter((scene) => scene !== selectedScene);
//     setScenes(newScenes);
//     setDisplayedScene(selectedScene);
//     setDisplayedFilm(selectedScene.film); 
//   };

//   return (
//     <div className="scene-container">
//       <button onClick={getRandomScene}>NEXT RANDOM SCENE</button>
//       {displayedScene && (
//         <div>
//           <img className="scene" src={displayedScene.image} alt="Random" />
//           <h4>{displayedScene.description}</h4>
//           <p>From: {displayedFilm}</p> {/* Display the film */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DisplayImage;

/* 
import React, { useState, useEffect } from 'react';
import data from "../api/data.json"; 
console.log(data)

const DisplayImage = () => {
  const [scenes, setScenes] = useState([]);
  const [displayedScene, setDisplayedScene] = useState(null);
  const [displayedFilm, setDisplayedFilm] = useState(null);

  useEffect(() => {
    // Flatten the scenes from all movies into a single array
    const allScenes = data.reduce((accumulator, movie) => {
      const scenesWithFilm = movie.scenes.map((scene) => ({
        ...scene,
        film: movie.title // Attach the film title to each scene
      }
      ));
      return accumulator.concat(scenesWithFilm);
    }, []);

    setScenes(allScenes);

    // Display the first scene when the component mounts
    if (allScenes.length > 0) {
      const randomIndex = Math.floor(Math.random() * allScenes.length);
      const selectedScene = allScenes[randomIndex];
      console.log("random scene", selectedScene);

      // Filter out the selected scene from the scenes array
      const newScenes = allScenes.filter((scene) => scene !== selectedScene);

      setScenes(newScenes);
      setDisplayedScene(selectedScene);
      setDisplayedFilm(selectedScene.film); // Set the displayed film
    }
  }, []);

  const getRandomScene = () => {
    if (scenes.length === 0) {
      setDisplayedScene(null); // temp
      setDisplayedFilm(null); // temp
      return;
    }

    const randomIndex = Math.floor(Math.random() * scenes.length);
    const selectedScene = scenes[randomIndex];
    console.log("random scene", selectedScene);

    // Filter out the selected scene from the scenes array
    const newScenes = scenes.filter((scene) => scene !== selectedScene);
    setScenes(newScenes);
    setDisplayedScene(selectedScene);
    setDisplayedFilm(selectedScene.film); 
  };

  return (
    <div className="scene-container">
      <button onClick={getRandomScene}>NEXT RANDOM SCENE</button>
      {displayedScene && (
        <div>
          <img className="scene" src={displayedScene.image} alt="Random" />
          <h4>{displayedScene.description}</h4>
          <p>From: {displayedFilm}</p> 
          </div>
          )}
        </div>
      );
    };
    
    export default DisplayImage;
    */