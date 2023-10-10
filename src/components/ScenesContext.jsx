// ScenesContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import data from '../api/data.json';

const ScenesContext = createContext();

export const ScenesProvider = ({ children }) => {
  const [scenes, setScenes] = useState([]);
  const [displayedScene, setDisplayedScene] = useState(null);
  const [displayedFilm, setDisplayedFilm] = useState(null);
  const [score, setScore] = useState(0)
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Flatten the scenes from all movies into a single array
    const allScenes = data.reduce((accumulator, movie) => {
      const scenesWithFilm = movie.scenes.map((scene) => ({
        ...scene,
        film: movie.title // Attach the film title to each scene
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
      setScenes(newScenes);
      setDisplayedScene(displayedScene);
      setDisplayedFilm(displayedScene.film); // Set the displayed film
      setIsLoading(false)
    }
  }, []);

  const getRandomScene = (episode) => {
    console.log("episode", episode)
    // if (game.length === 0) {
    //   setDisplayedScene(null);
    //   setDisplayedFilm(null);
    //   return;
    // }

    if (scenes.length === 0) {
      setDisplayedScene(null);
      setDisplayedFilm(null);
      return;
    }

    if (episode)
    if (displayedFilm.includes(` ${episode} `)) {
      console.log("call sore correct")
      setScore(prev => prev + 1)
      // setIsChanged(true);
        // console.log("episode1", episode)
        // console.log("displayedFilm1", displayedFilm)
    }  else {
      console.log("call socre wrong")
      // setIsChanged(false);
      } 

    const randomIndex = Math.floor(Math.random() * scenes.length);
    const newScene = scenes[randomIndex];



    const newScenes = scenes.filter((scene) => scene !== newScene);

    setScenes(newScenes);
    setDisplayedScene(newScene);
    setDisplayedFilm(newScene.film);
  };

  // const contextValue = {
  //   score,
  //   displayedScene,
  //   displayedFilm,
  //   getRandomScene,
  // };

  return (
    <ScenesContext.Provider value={{score, displayedScene, displayedFilm, getRandomScene, isLoading}}>
      {children}
    </ScenesContext.Provider>
  );
};

export const useScenes = () => {
  return useContext(ScenesContext);
};
