import { useEffect, useState } from "react";

const QuizCounter = ({ quizCounter }) => {
  const [counterClass, setCounterClass] = useState("");
  
  useEffect(() => {
    // Add a class to trigger the animation
    setCounterClass("blueEffect");

    // Remove the class after the animation finishes
    const timer = setTimeout(() => {
      setCounterClass("");
    }, 3000); // Assuming your animation duration is 3 seconds

    return () => clearTimeout(timer);
  }, [quizCounter]);

  return (
    <div>
      <h3 className={`score-value counter ${counterClass}`}>
        {quizCounter}
      </h3>
      <h4 className="counter">Questions left</h4>
    </div>
  );
};
export default QuizCounter;
