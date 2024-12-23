import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import process from "process";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Define React Router future flags
const futureFlags = {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
};

root.render(
    <React.StrictMode>
        <Router future={futureFlags}> {/* Add the future flags here */}
            <App />
        </Router>
    </React.StrictMode>
);
