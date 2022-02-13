import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function AApp() {
  const name = "Mamun";
  const fullName = "Arafat Nahian";
  const age = 25;
  let subscriber = 1500;
  const html = `<div>React is funny!</div>`;

  const obj = {
    fullName: "Saif Uddin",
    age: 30,
    [fullName]: fullName,
  };

  return (
    <div className="container">
      {html}
      {name}
      <a>Hello, {name}!</a>
      <a>Subscriber, {subscriber}</a>
      <a>Hello, {obj.fullName}!</a>
      <a>Hello, {obj[fullName]}!</a>
    </div>
  );
}
ReactDOM.render(<AApp />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
