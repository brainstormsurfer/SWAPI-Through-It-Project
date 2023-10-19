import { useEffect, useState } from "react";

const QuizCounter = ({ quizCounter }) => {
  const [counterClass, setCounterClass] = useState("");

  useEffect(() => {
    if (quizCounter > 0) {
      setCounterClass("blueEffect");
      
      const timer = setTimeout(() => {
        setCounterClass(""); 
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setCounterClass("final-blue-shrink");
      const timer = setTimeout(() => {
        setCounterClass(""); 
      }, 3000);    
      return () => clearTimeout(timer);
    }
  }, [quizCounter]);

  return (
    <div className={(quizCounter === 0 && counterClass === "") ? 'dis-play' :''}>
      <h3 className={`counter-value counter ${counterClass}`}>
        {quizCounter}
      </h3>
      <h4 className={`counter-title ${quizCounter > 0 ? "" : "shrink-vertical"}`}>
        <span className="special-s">S</span>cenes left
      </h4>
    </div>
  );
};

export default QuizCounter;
