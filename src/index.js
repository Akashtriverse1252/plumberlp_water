import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AlerterProvider } from "./context/AlertProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AlerterProvider>
      <App />
    </AlerterProvider>
  </React.StrictMode>
);
