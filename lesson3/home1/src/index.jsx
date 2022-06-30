import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Greeting from "./Greeting";

const rootElement = document.querySelector("#root");

ReactDOM.render(
  <Greeting
    firstName="Tom"
    lastName="Doe"
    birthDate={new Date(2004, 11, 31)}
  />,
  rootElement
);
