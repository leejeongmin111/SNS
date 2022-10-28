import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
