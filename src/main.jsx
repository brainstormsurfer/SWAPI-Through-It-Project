import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GameProvider } from "./components/context";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
