import React from "react"; // Import a npm package called react and set it to a variable called React

import { Link } from "react-router-dom";
/**
 * let's declare our first component as a function component
 *
 * Note: Elements in JSX that start with a capital letter are assumed to be React components.
 * Lowercase elements are assumed to be native HTML.
 *
 * JSX is capable to wrap up lines of JSX within parenthesis
 *
 * By default everything in each file is private.
 *
 * Because everything in a ES module is private by default
 *
 */

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React, Flux, and React Router for ultra-responsive web apps.</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
      {/**
       * this is the same as an anchor :  <a href="/about">About</a>
       * with Link rounting happens on client side so no server callbacks are triggered.
       * as it happened with the anchor above
       *
       * */}
    </div>
  );
}

/**
 * "someone" will instantiate this function, like this:
 * 
 * const homePage = new HomePage();
 
 * so,
 * homePage = <div> ... </div>
 */

/**
 * if we don't export and because everything by default is private ,
 * the function HomePage won't be made availale outside this module.
 */

/**
 * moreover exporting HomePage as a default,
 * allows the import file to name it as a named import
 */
export default HomePage;
