import { useEffect, useState } from "react";
import { useGameContext } from "./context";

const CounterUI = () => {
  const {
    state: { counter },
  } = useGameContext();
  const [counterEffect, setCounterEffect] = useState("");
  console.log("inside CounterUI counter", counter);

  useEffect(() => {
    console.log("CHECK4.1")
    console.log("use effect 1  counter",counter)
    if (counter > 0) {
      setCounterEffect("blueCounterEffect");

      const timer = setTimeout(() => {
          if (counter > 0) {
        setCounterEffect("");
        }
      }, 2500);

      return () => clearTimeout(timer);
    } else if (counter === 0) {
      setCounterEffect("final-blue-effect");
      const timer = setTimeout(() => {
        setCounterEffect("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  return (
    <div className={counter === 0 && counterEffect === "" ? "dis-play" : "counter-container"}>
      {/* // <div> */}
      <h2 className={`counter-value ${counterEffect}`}>{counter}</h2>
     
      <h2 className={`counter-title ${counter > 0 ? "" : "effect-vertical"}`}>
        Scenes left
      </h2>
    </div>
  );
};

export default CounterUI;

/*
<div className={(counter === 0 && counterClass === "") ? 'dis-play' :''}>
      <h3 className={`counter-value counter ${counterClass}`}>
        {counter}
      </h3>
      <h4 className={`counter-title ${counter > 0 ? "" : "shrink-vertical"}`}>
        <span className="special-s">S</span>cenes left
      </h4>
    </div>
    */