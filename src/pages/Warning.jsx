import { useNavigate } from "react-router";
import './Warning.css';
import './warning-responsive.css';


const Warning = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="warning-container">
        <h1>ATTENTION</h1>
        <br />
        <p className="warning-text">
          The following page will feature a background music for an enhanced experience. Although a Mute button will be available at the top right corner of the screen, please verify in advance that the volume level in your device isn't too high.
        </p>
        <p className="enjoy">Enjoy your staying.</p>
        <br />
        <button
          className="btn-warning"
          onClick={() => {
            navigate("intro");
          }}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Warning;
