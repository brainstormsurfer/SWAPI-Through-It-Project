import { Link } from "react-router-dom";
// import { useGameContext } from "../components/context";
// import { GAME_OVER } from "../components/ACTIONS";
import './styles/NotFound.css'

const NotFound = () => {
// const { isGameOver, dispatch } = useGameContext()

// const restartHandler = () => {
//   if (isGameOver) {
//     dispatch({type: GAME_OVER, payload: false})
//   }
// }

  return (
    <main>
    <section className="not_found">
      <div className="not_found-container">
        <div className="button-container">          
          <button className="btn-endgame pulse-endgame"
          //  onClick={restartHandler}
           >
            <Link to="quiz"> Start Playing </Link>
          </button>
        </div>
        <div className="not_found-showcase">
          <h1 className="front">4</h1>
          <h1 className="back">4</h1>
        </div>
        <h2>Page not found</h2>
      </div>
    </section>
    </main>
  );
};

export default NotFound;
