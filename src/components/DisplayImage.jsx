
import Hint from "./Hint";

const DisplayImage = ({selectedScene}) => {

  return (
    <main>
      {selectedScene && (
        <div className="scene-container">
          <img className="scene" src={selectedScene?.image} alt="Random" />
        </div>
      )}
      <Hint description={selectedScene?.description} />
    </main>
  );
};

export default DisplayImage;
