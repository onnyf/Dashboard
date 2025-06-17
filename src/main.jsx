// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import your refactored App.jsx
import "./index.css"; // Tailwind or general styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
