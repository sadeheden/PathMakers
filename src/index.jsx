// index.js
import React from "react";
import ReactDOM from "react-dom/client";  // For React 18+
import App from "./App";
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";
=======
>>>>>>> parent of 9638711 (.)
import "./styles/App.css";
import process from "process";


// Create the root using the new method for React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Router>
      <App />
    </Router>
  </React.StrictMode>
=======
    <App />
  </React.StrictMode>,
  document.getElementById("root")
>>>>>>> parent of 9638711 (.)
);
