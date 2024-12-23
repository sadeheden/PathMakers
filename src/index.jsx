import React from "react";
import ReactDOM from "react-dom/client";  // For React 18+
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";

// Create the root using the new method for React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
