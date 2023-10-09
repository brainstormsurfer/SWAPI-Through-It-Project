import React from "react";
import ReactDOM from "react-dom";
import { ScenesProvider } from "./components/ScenesContext";
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <ScenesProvider>
      <App />
    </ScenesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
