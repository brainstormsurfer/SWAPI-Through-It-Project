import { useState, useEffect } from 'react';
import { useScenes } from './ScenesContext';

const useRandomScene = (initialData) => {
  const { scenes, setScenes, selectedFilmLogo, setSelectedFilmLogo } = useScenes();

  useEffect(() => {
    // Flatten the scenes from all movies into a single array
    const allScenes = initialData.reduce((accumulator, movie) => {
      const scenesWithFilm = movie.scenes.map((scene) => ({
        ...scene,
        film: movie.title,
        filmLogo: movie.logo, // Attach the film logo to each scene
      }));
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
      setDisplayedFilm(selectedScene.film);
      setDisplayedFilmLogo(selectedScene.filmLogo); // Set the displayed film logo
    }
  }, [initialData]);

  const getRandomScene = () => {
    if (scenes.length === 0) {
      setDisplayedScene(null);
      setDisplayedFilm(null);
      setDisplayedFilmLogo(null); // Reset displayed film logo
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
    setDisplayedFilmLogo(selectedScene.filmLogo); // Set the displayed film logo
  };

  return {
    displayedScene,
    displayedFilm,
    displayedFilmLogo, // Add displayed film logo
    getRandomScene,
  };
};

export default useRandomScene;

// import { useState, useEffect } from 'react';

// const useRandomScene = (initialData) => {
//   const [scenes, setScenes] = useState([]);
//   const [displayedScene, setDisplayedScene] = useState(null);
//   const [displayedFilm, setDisplayedFilm] = useState(null);

//   useEffect(() => {
//     // Flatten the scenes from all movies into a single array
//     const allScenes = initialData.reduce((accumulator, movie) => {
//       const scenesWithFilm = movie.scenes.map((scene) => ({
//         ...scene,
//         film: movie.title // Attach the film title to each scene
//       }));
//       return accumulator.concat(scenesWithFilm);
//     }, []);

//     setScenes(allScenes);

//     // Display the first scene when the component mounts
//     if (allScenes.length > 0) {
//       getRandomScene();
//     }
//   }, [initialData]);

//   const getRandomScene = () => {
//     if (scenes.length === 0) {
//       setDisplayedScene(null);
//       setDisplayedFilm(null);
//       return;
//     }

//     const randomIndex = Math.floor(Math.random() * scenes.length);
//     const selectedScene = scenes[randomIndex];

//     // Filter out the selected scene from the scenes array
//     const newScenes = scenes.filter((scene) => scene !== selectedScene);

//     setScenes(newScenes);
//     setDisplayedScene(selectedScene);
//     setDisplayedFilm(selectedScene.film);
//   };

//   return {
//     displayedScene,
//     displayedFilm,
//     getRandomScene,
//   };
// };

// export default useRandomScene;
