import React from "react";
import { render } from "react-dom";
import 'normalize.css';
import App from "./app";
import { GlobalStyles } from "./GlobalStyles";

render(
  <>
    <App />
    <GlobalStyles />
  </>,
  document.getElementById("root")
);
