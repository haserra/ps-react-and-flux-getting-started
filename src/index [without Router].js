import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
//import HomePage from "./components/HomePage";
import App from "./components/App";
//import AboutPage from "./components/aAboutPage";
import { BrowserRouter as Router } from "react-router-dom";

/**
 * Note: render creates a const called render that references react-dom render function
 *
 * This is equivalent to:
 */

// import ReactDOM from "react-dom";
// const render = ReactDOM.render;

/**
 * First approach
 */

//ReactDOM.render(<HomePage />, document.getElementById("root"));
// render(<HomePage />, document.getElementById("root"));

/**
 * Second approach would be :
 */

// ReactDOM.render(<HomePage/>, document.getElementById("root"))

//render(<AboutPage />, document.getElementById("root"));

// Now let's wrap our App component in a Router

render(<App />, document.getElementById("root"));
