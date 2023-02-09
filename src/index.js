import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom/client";
import './styles.css'
const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
