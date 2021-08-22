// these are all default imnports, not named imports
import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
//we can not default export Route from react-router-dom
//import Route from "react-router-dom";
import "../styles/header.css";

// we need a named import - the exact function named Route not a default import
// we need to import another component - Route
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
//import { Switch } from "react-router-dom";
import ManageCoursePage from "./ManageCoursePage";
// import the toast container
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* function getPage() {
  const route = window.location.pathname;
  if (route === "/about") {
    return <AbouPage />;
  } else {
    return <HomePage />;
  }
} */

function App() {
  // from now on we will be using Route component to create our routes
  // so we won't be using getPage to achieve this

  /* function getPage() {
    const route = window.location.pathname;
    if (route === "/about") {
      return <AbouPage />;
    } else if (route === "/courses") {
      return <CoursesPage />;
    } else {
      return <HomePage />;
    }
  } */

  /**
   * This App component will return the Header component, plus the About Component or the Home Page component
   */
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      {/**
       * learn more abouty Toastify here: https://github.com/fkhadra/react-toastify/#api
       */}
      <Header />
      {/**
        Only one route listed in the switch component can match
       */}
      <Switch>
        {/** the switch component guarantees that only one route will match otherwise the no-route would always match */
        /** the Route component takes (at least) two props - the path and the component that is to be loaded when the route matches */}
        {/** Note: It's important to place more specific routes on top of less specific routes */}
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />

        <Redirect from="/about-page" to="about" />
        {/**
          A Route with no path will match all routes, so needs to be mentioned last

          URL Parameters

          // Props will be
          props.match.params.slug; // clean-code
          props.location.query; // { module: 3 }
          props.location.pathname; // /course/clean-code/?module=3



         */}
        <Route component={NotFoundPage}></Route>
      </Switch>
      {
        //getPage()
      }
    </div>
  );
}

export default App;
