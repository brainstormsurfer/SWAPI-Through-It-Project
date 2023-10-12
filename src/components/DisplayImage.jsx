
import Hint from "./Hint";

const DisplayImage = ({selectedScene, quizCounter}) => {

  return (
    <div className={`scene-container ${quizCounter > 0 ? '' : 'expand'}`}>
      {selectedScene && (
        <div>
        {/* <div className="scene-container"> */}
          { quizCounter > 0 &&          
          <img className="scene" src={selectedScene?.image} alt="" />
          }
        </div>
      )}
      { quizCounter > 0 &&                    
          <Hint description={selectedScene?.description} />
      }
    </div>
  );
};

export default DisplayImage;
