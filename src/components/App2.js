import React, { Component } from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";

/**
 * Testing the scope of functions
 */

function getPage() {
  const route = window.location.pathname;
  console.log(`I've entered the getPage function!`);

  if (route === "/about") {
    console.log(`Have clicked on About`);
    return <AboutPage />;
  } else {
    console.log(`Have clicked on Home Page`);
    return <HomePage />;
  }
}

function App2() {
  /* function getPage() {
    const route = window.location.pathname;
    console.log(`I've entered the getPage function again!`);

    if (route === "/about") {
      console.log(`Have clicked on About`);
      return <AboutPage />;
    } else {
      console.log(`Have clicked on Home Page`);
      return <HomePage />;
    }
  } */

  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App2;
