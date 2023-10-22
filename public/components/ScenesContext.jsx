// ScenesContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import data from '../../../../../SWAPIT-Project/src/api/data.json';

const ScenesContext = createContext();

export const ScenesProvider = ({ children }) => {
  const [scenes, setScenes] = useState([]);
  const [displayedScene, setDisplayedScene] = useState(null);
  const [displayedFilm, setDisplayedFilm] = useState(null);
  const [score, setScore] = useState(0)

  useEffect(() => {

    console.log("data", data)

    // create (a flat) array of scenes from (imported) 'data' of all movies
    const allScenes = data.reduce((accumulator, movie) => {      
    // each scene object contains the following properties: image (url), description, a film (title) and its poster (url)
    const sceneObject = movie.scenes.map((scene) => {
      return ({
        ...scene,
        film: movie.title,
        poster: movie.poster
      })});      
      return accumulator.concat(sceneObject);
    }, []);

    setScenes(allScenes);

    // A "quiz initializer" operation : randomly picking a scene when the component mounts
    if (allScenes.length > 0) {
      const randomIndex = Math.floor(Math.random() * allScenes.length);    
      const displayedScene = allScenes[randomIndex];

      const newScenes = allScenes.filter((scene) => scene !== displayedScene);
      // console.log("newScenes", newScenes)
      console.log("displayedScene", displayedScene)
      console.log("displayedScene.film", displayedScene.film)
      console.log("displayedScene.poster", displayedScene.poster)
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
