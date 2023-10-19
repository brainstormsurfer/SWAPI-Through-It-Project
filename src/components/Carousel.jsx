import { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { nanoid } from 'nanoid';

const Carousel = ({ scenes }) => {
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

  return (
    <section className="slide-container">
      {scenes?.map((scene, sceneIndex) => (
        <article
          className="slide scene"
          key={nanoid()}
          style={{
            transform: `translateX(${
              100 * (sceneIndex - currentSceneIndex)
            }%)`,
            opacity: sceneIndex === currentSceneIndex ? "1" : "0",
            visibility: sceneIndex === currentSceneIndex ? "visible" : "hidden",
          }}
        >
          <img src={scene.image} alt="" className="mini-scene" />
          <FaQuoteRight className="icon" />
        </article>
      ))}
      <button type="btn-prev" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="btn-next" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
