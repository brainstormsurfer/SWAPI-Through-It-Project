import { useNavigate } from "react-router";
import "./style/warning.css";

const Warning = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="warning-container">
        <h1>ATTENTION</h1>
        <br />
        <p className="warning-text">
          The following page will feature a background music for an enhanced
          experience.
            <br/>          
          {/* <p className="warning-text"> */}
          Although a Mute button will be available 
          {/* <br /> */}
          at the top right corner of the screen,
          </p>
          <p className="warning-text">
            Please verify in advance that the volume level in your device isn't
            too high.
          {/* <br /> */}          
        </p>
        <p className="enjoy">Enjoy your staying.</p>
        <br />
        <button
          className="btn-start"
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
