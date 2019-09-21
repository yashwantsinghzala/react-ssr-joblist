import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppContainer from "./AppContainer";

ReactDom.hydrate(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>,
  document.querySelector("#root")
);
