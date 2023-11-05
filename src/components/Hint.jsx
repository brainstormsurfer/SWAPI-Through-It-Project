import "./styles/Hint.css";
import { useGameContext } from "../components/context";

const Hint = () => {
  const {state: { displayedScene }} = useGameContext();  
  return (
    <div className="hint-container">
      <h4 className="hint">{displayedScene?.description}</h4>
    </div>
  );
};

export default Hint;
