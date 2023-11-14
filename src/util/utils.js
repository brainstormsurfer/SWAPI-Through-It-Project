export const getRandomScene = (scenes) => {
    console.log("scenes", scenes)
    console.log("scenes.length", scenes.length)
    const randomIndex = Math.floor(Math.random() * scenes.length);
    return scenes[randomIndex];
  };
  
  export const filteredScenes = (scenes, newScene) => {
    return scenes.filter((scene) => scene !== newScene);
  };
