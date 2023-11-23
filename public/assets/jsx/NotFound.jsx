// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import './NotFound.css'

const NotFound = () => {
  const navigate = useNavigate()

  const navigateHandler = () => {
    navigate("/quiz", { replace: true });
  }

  return (
    <main>
    <section className="not_found">
      <div className="not_found-container">
        <div className="button-container">          
          <button className="btn-notfound pulse-notfound" onClick={navigateHandler} 
           >
            {/* <Link to="quiz"> Start Playing </Link> */}
            Start Playing            
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
