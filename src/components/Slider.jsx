import { useState, useEffect } from "react";
import "../styles/slider.css";
import {nanoid} from 'nanoid'
const Slider = ({ scenes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      clearInterval(sliderId);  
    };
  }, [currentSceneIndex, scenes]);

      
  const prevSlide = () => {
    setCurrentSceneIndex((prevIndex) =>
      (prevIndex - 1 + scenes?.length) % scenes?.length
    );
  };

  const nextSlide = () => {
    setCurrentSceneIndex((prevIndex) =>
      (prevIndex + 1) % scenes?.length
    );

}
  // console.log("INSIDE SLIDER", scenes);
  const sliderStyles = {
    height: "100%",
    width: "20%",
    position: "relative",
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyles = {
    width: "100%",
    height: "min-content",
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
    color: "orange",
  };

  const slideStyles = {   
    position: 'relative',
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${scenes[currentIndex].image})`,
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    Transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    Transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? scenes.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === scenes.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={sliderStyles}>

      <div style={leftArrowStyles} onClick={goToPrevious}>
        ‹
      </div>

      <div style={rightArrowStyles} onClick={goToNext}>
        ›
      </div>
    
    {/* <div style={slideStyles}> */}
      
        {/* <div className="slideStyles"> */}

        {/* <ul className="sliderStyles"> */}
        <section className="slide-container">
      {scenes?.map((scene, slideIndex) => {
        const { image, film /*, scoring*/ } = scene;
        return (

        // <li className="mini-scene">
          <div className="slide mini-scene"
          key={nanoid()}
          style={{
            transform: `translateX(${100 * (slideIndex - currentIndex)}%)`,
            opacity: slideIndex === currentIndex ? "1" : "0.5",
            visibility: slideIndex === currentIndex ? "visible" : "hidden",
          }}
          ></div>
          // </li>
          )}          
          )
          
        }
        {/* </ul> */}
      {/* </div> */}
      {/* <div style={dotsContainerStyles}> */}
      <div className="dots-container">
        {/* <div style={slideStyles}></div> */}
        {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
        {scenes?.map((scene, slideIndex) => (
          <div
            key={`"0"${slideIndex}`}
            className="scoring-dot"
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
        </div>
    {/* </div>     */}
    </section>    
  );
};

export default Slider;

// import { useState } from "react";
// import '../styles/slider.css'
// const Slider = ({ scenes, score }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [] = useState()

//   console.log("INSIDE SLIDER", scenes);
//   const sliderStyles = {
//     height: "100%",
//     position: "relative",
//   };

//   const dotsContainerStyles = {
//     display: "flex",
//     justifyContent: "center",
//   };

//   // const dotStyles = {
//   //   width: '100%',
//   //   height: 'min-content',
//   //   margin: "0 3px",
//   //   cursor: "pointer",
//   //   fontSize: "20px",
//   //   color: 'orange'
//   // };

//   const slideStyles = {
//     width: "100%",
//     height: "100%",
//     borderRadius: "10px",
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//     backgroundImage: `url(${scenes[currentIndex].image})`,
//   };

//   const leftArrowStyles = {
//     position: "absolute",
//     top: "50%",
//     Transform: "translate(0, -50%)",
//     left: "32px",
//     fontSize: "45px",
//     color: "#fff",
//     zIndex: 1,
//     cursor: "pointer",
//   };

//   const rightArrowStyles = {
//     position: "absolute",
//     top: "50%",
//     Transform: "translate(0, -50%)",
//     right: "32px",
//     fontSize: "45px",
//     color: "#fff",
//     zIndex: 1,
//     cursor: "pointer",
//   };

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? scenes.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = () => {
//     const isLastSlide = currentIndex === scenes.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div className='endgame-container'>
//     <div className="mini-scene">
//     <div style={sliderStyles}>
//       <div style={leftArrowStyles} onClick={goToPrevious}>
//         ‹
//       </div>
//       <div style={rightArrowStyles} onClick={goToNext}>
//         ›
//       </div>
//       <div style={slideStyles}></div>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//       {scenes.map((scene, slideIndex) => (
//         <div
//           key={slideIndex}
//           className="dot"
//           onClick={() => goToSlide(slideIndex)}
//         >
//           ●
//         </div>
//       ))}
//       </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Slider;
