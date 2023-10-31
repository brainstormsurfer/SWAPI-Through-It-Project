import { Link } from "react-router-dom";
// import { useGameContext } from "../components/context";
// import { GAME_OVER } from "../components/ACTIONS";

const ErrorPage = () => {
// const { isGameOver, dispatch } = useGameContext()

// const restartHandler = () => {
//   if (isGameOver) {
//     dispatch({type: GAME_OVER, payload: false})
//   }
// }

  return (
    <section className="page_404">
      <div className="page_404-container">
        <div className="button-container">          
          <button className="btn-endgame pulse-endgame"
          //  onClick={restartHandler}
           >
            <Link to="quiz"> Start Playing </Link>
          </button>
        </div>
        <div className="page_404-showcase">
          <h1 className="front">4</h1>
          <h1 className="back">4</h1>
        </div>
        <h2>Page not found</h2>
      </div>
    </section>
  );
};

export default ErrorPage;
