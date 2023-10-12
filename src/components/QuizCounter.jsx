import { useEffect, useState } from "react";

const QuizCounter = ({ quizCounter }) => {
  const [counterClass, setCounterClass] = useState("");

  useEffect(() => {
    if (quizCounter > 0) {
      setCounterClass("blueEffect");
      
      const timer = setTimeout(() => {
        setCounterClass(""); // Clear the class after the animation finishes
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setCounterClass("final-blue-shrink");
    }
  }, [quizCounter]);

  return (
    <div>
      <h3 className={`counter-value counter ${counterClass}`}>
        {quizCounter}
      </h3>
      <h4 className={`counter-title ${quizCounter > 0 ? "" : "shrink-vertical"}`}>
        scenes left
      </h4>
    </div>
  );
};

export default QuizCounter;
