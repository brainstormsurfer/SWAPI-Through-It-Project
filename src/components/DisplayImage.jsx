import Hint from "./Hint";

const DisplayImage = ({ selectedScene, quizCounter }) => {
  return (
    <main>
      {selectedScene && (
        <div
          className={`scene-container ${
            quizCounter > 0 ? "" : "expand"
          }`}
        >
          {/* <div className="scene-container"> */}
          {quizCounter > 0 && (
            <img className="scene" src={selectedScene?.image} alt="Random" />
          )}
        </div>
      )}
      {quizCounter > 0 && <Hint description={selectedScene?.description} />}
    </main>
  );
};

export default DisplayImage;
