import data from "../api/data.json";
// import { useEffect } from "react";

// import {
//     SET_QUIZ_SCENES,
//     SET_DISPLAYED_SCENE,
//     LOADING,
//     RESET_GAME
//   } from "./ACTIONS";

import { getRandomScene } from "./utils";


// const GameInit = () => {
    
export const initialState = {
    isLoading: true,
    displayedScene: null,
    score: 0,
    counter: 10,
    quizSummary: [], 
    isGameOver: false, 
    }

    export const fetchDataAndInitialize = () => {
      let displayedScene = null
        const allScenes = data.reduce((accumulator, movie) => {      
          const sceneObject = movie.scenes.map((scene) => {
            return ({
              ...scene,
              film: movie.title,
              poster: movie.poster
            });
          });
          return accumulator.concat(sceneObject);
        })    

        if (allScenes.length > 0) {
          displayedScene = getRandomScene(allScenes)
        } else {
          throw new Error("Failed to fetch data")
        }

        return (allScenes, displayedScene)
      };    
  


      // const resetGame = () => {
      //   dispatch({ type: LOADING })
      //   const {allScenes, displayedScene} = fetchDataAndInitialize()
      //   // console.log("displayedScene", displayedScene)
      //   dispatch({ type: SET_QUIZ_SCENES, payload: allScenes })
      //   dispatch({ type: SET_DISPLAYED_SCENE, payload: displayedScene })
      //   dispatch({ type: RESET_GAME, payload: {initialState, fetchDataAndInitialize} });
      // };
      