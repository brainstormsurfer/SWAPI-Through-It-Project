import Hint from "./Hint";
import Loading from "./Loading";

const DisplayImage = ({ selectedScene, isLoading }) => {

  if (isLoading && !selectedScene) {
    return <Loading />;
  }

  return (
    !isLoading && (
      <div className="scene-container">
        {selectedScene && (
          <>
            <img
              src={selectedScene?.image}
              alt=""
            />
            <Hint description={selectedScene?.description} />
          </>
        )}
      </div>
    )
  );
};

export default DisplayImage;
