import { useEffect, useState } from "react";
import { useGameContext } from "./context";

const CounterUI = () => {
  const { state: { counter } } = useGameContext();
  const [counterClass, setCounterClass] = useState("");
  console.log("inside CounterUI counter", counter)

  useEffect(() => {
    if (counter > 0) {
      setCounterClass("blueEffect");
      
      const timer = setTimeout(() => {
        setCounterClass(""); 
      }, 3000);

      return () => clearTimeout(timer);
    } else if (counter === 0) {
      setCounterClass("final-blue-shrink");
      const timer = setTimeout(() => {
        setCounterClass(""); 
      }, 3000);    
      return () => clearTimeout(timer);
    }
  }, [counter]);

  return (
    <div className={(counter === 0 && counterClass === "") ? 'dis-play' :''}>
      <h3 className={`counter-value counter ${counterClass}`}>
        {counter}
      </h3>
      <h4 className={`counter-title ${counter > 0 ? "" : "shrink-vertical"}`}>
        <span className="special-s">S</span>cenes left
      </h4>
    </div>
  );
};

export default CounterUI;
