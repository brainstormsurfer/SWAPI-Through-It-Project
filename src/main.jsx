import React from "react";
import ReactDOM from "react-dom";
// import { ScenesProvider } from "./components/ScenesContext";
import App from "./App";
import { GameProvider } from "./components/context";

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
