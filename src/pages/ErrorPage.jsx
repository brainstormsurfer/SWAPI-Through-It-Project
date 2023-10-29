// import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="page_404">  
         <div className="page_404-container">
         <div className="button-container">
        <button className="btn-start-endgame pulse-endgame">
        <Link to="quiz/">
            Start New Game
        </Link>
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
}

export default ErrorPage
