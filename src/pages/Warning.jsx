import React from "react";
import { useNavigate } from "react-router";

const Warning = () => {
  const navigate = useNavigate();
  return (
    <div className="warning-container">
      <h1>ATTENTION</h1>  
      <br />    
      <p className="warning-text">
      The following page will feature a background music for an enhanced experience. <br />
        Although a Mute button will be available at the top right corner, <br /> 
        Please verify in advance that the volume level in your device isn't too high.
        <br />
        <br />      
      </p>
        <p className="enjoy">
            Enjoy your staying.            
        </p>
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
  );
};

export default Warning;
