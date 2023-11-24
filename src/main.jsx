import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './styles/main.css'
import './styles/main-mq.css'
import { GameProvider } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
