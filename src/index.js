import React from "react";
import { render } from "react-dom";
import "normalize.css";
import App from "./App";
import { GlobalStyles } from "./GlobalStyles";
import { firebase } from "./lib/firebase.prod";

render(
  <>
    <App />
    <GlobalStyles />
  </>,
  document.getElementById("root")
);
