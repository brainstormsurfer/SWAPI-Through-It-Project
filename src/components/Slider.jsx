import {useState} from 'react'
// import { nanoid } from 'nanoid';
// import { useEffect } from 'react';

const Slider = ({quizScenes}) => {
  const [currentIndex, setCurrentIndex] = useState(0)  

// useEffect(() => {
//   console.log("SLIDER use fkt", quizScenes)
// }, [quizScenes])


  console.log("INSIDE SLIDER", quizScenes)
    const sliderStyles = {
        height:"100%",
        position: 'relative'
    }

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${quizScenes[currentIndex].image})`,
      }

      const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        Transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: "pointer" 
    }

      const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        Transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: "pointer" 
    }

    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0
      const newIndex = isFirstSlide ? quizScenes.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }

    const goToNext = () => {
      const isLastSlide = currentIndex === quizScenes.length - 1
      const newIndex = isLastSlide ? 0 : currentIndex + 1
      setCurrentIndex(newIndex);
    }      

  return (
    <div style={sliderStyles}>
    <div style={leftArrowStyles} onClick={goToPrevious}>‹</div>
    <div style={rightArrowStyles} onClick={goToNext}>›</div>
    <div style={slideStyles}></div>
    <div>
      {quizScenes.map((scene, slideIndex) => (
        <div key={slideIndex}>●</div>
      ))}
    </div>
    </div>
  )
}

export default Slider