import "bootstrap/dist/css/bootstrap.min.css"; // webpack handles this import
import React from "react";
import { render } from "react-dom"; // This is a named import - handy way to access a function directly inside the element we are importing  / so I am importing exactly the render function

// alternatively we could do:
// import ReactDOM from "react-dom";
// const render = ReactDOM.render;

//import HomePage from "./components/HomePage";
import App from "./components/App";
//import App2 from "./components/App2";

//import AboutPage from "./components/aAboutPage";
// aliasing the BrowserRouter as Router
// we need to choose which Router import and we will use BrowserRouter
// because it's the recommended router for modern web apps
// aliasing the BrowserRouter component
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

// the second argument is to specify the DOM Element  (HTML) arg where we need to place our App

// This is required: Now let's wrap our App component in a Router
// Wrapping at this level, because this way we can in any other component declare Routes

// Note: The App component is called from our application entry point
// Note: By wrapping our top level component in a Router component we can now declare routes inside

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
// Now we can declare routes in any of this App's components
