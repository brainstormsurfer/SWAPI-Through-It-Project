// ScenesContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import data from '../api/data.json';

const ScenesContext = createContext();

export const ScenesProvider = ({ children }) => {
  const [scenes, setScenes] = useState([]);
  const [displayedScene, setDisplayedScene] = useState(null);
  const [displayedFilm, setDisplayedFilm] = useState(null);
  const [score, setScore] = useState(0)

  useEffect(() => {
    // Flatten the scenes from all movies into a single array
    const allScenes = data.reduce((accumulator, movie) => {
      const scenesWithFilm = movie.scenes.map((scene) => ({
        ...scene,
        film: movie.title // Attaching the film title to each scene (for the endgame)
      }));
      return accumulator.concat(scenesWithFilm);
    }, []);

    setScenes(allScenes);

    // Display the first scene when the component mounts
    if (allScenes.length > 0) {
      const randomIndex = Math.floor(Math.random() * allScenes.length);
      const displayedScene = allScenes[randomIndex];

      // Filter out the selected scene from the scenes array
      const newScenes = allScenes.filter((scene) => scene !== displayedScene);
      console.log("displayedScene", displayedScene)
      console.log("displayedScene.film", displayedScene.film)
      // console.log("displayedScene.film", displayedScene.poster)
      setScenes(newScenes);
      setDisplayedScene(displayedScene);
      setDisplayedFilm(displayedScene.film); 
    }
  }, []);

  const getRandomScene = (episode) => {
    console.log("episode", episode)

    if (episode)
    if (displayedFilm.includes(` ${episode} `)) {      
      setScore(prev => prev + 1)
    } 

    const randomIndex = Math.floor(Math.random() * scenes.length);
    const newScene = scenes[randomIndex];



    const newScenes = scenes.filter((scene) => scene !== newScene);

    setScenes(newScenes);
    setDisplayedScene(newScene);
    setDisplayedFilm(newScene.film);
    // setIsLoading(false)
  };

  // const contextValue = {
  //   score,
  //   displayedScene,
  //   displayedFilm,
  //   getRandomScene,
  // };

  return (
    <ScenesContext.Provider value={{score, displayedScene, displayedFilm, getRandomScene }}>
      {children}
    </ScenesContext.Provider>
  );
};

export const useScenes = () => {
  return useContext(ScenesContext);
};
