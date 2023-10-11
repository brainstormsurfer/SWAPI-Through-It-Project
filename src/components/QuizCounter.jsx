import { useEffect, useState } from "react";

const QuizCounter = ({ quizCounter }) => {
  const [counterClass, setCounterClass] = useState("");
  
  useEffect(() => {
    console.log("quizCounter", quizCounter)
    // Add a class to trigger the animation
    setCounterClass("blueEffect");
    // Remove the class after the animation finishes
    const timer = setTimeout(() => {      
      setCounterClass("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [quizCounter]);

  return (
    <div>
      <h3 className={`counter-value counter ${counterClass} ${quizCounter > 0 ? '' : 'shrink-horizontal'}`}>
        {quizCounter}
      </h3>
      <h4 className={`counter ${quizCounter > 0 ? '' : 'shrink-vertical'}`}>scenes left</h4>
    </div>
  );
};
export default QuizCounter;
