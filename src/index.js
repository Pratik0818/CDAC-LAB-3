import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store/Store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
  <Provider store={Store}>
    <App />
    </Provider>
  </Router>
);
