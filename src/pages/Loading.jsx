import './styles/Loading.css'
import { useGameContext } from "../components/context";

const Loading = () => {
  const { state: isLoading } = useGameContext();  
  return (
    <>
      {
      isLoading && 
      (
        <div className="loading">
          <div className="spinner"></div>
          <div className="loading-title">Star Wars</div>
          <div className="loading-title-upper">the ultimate</div>
          <div className="loading-title-lower">quiz</div>
        </div>
      )}
    </>
  );
};

export default Loading;
