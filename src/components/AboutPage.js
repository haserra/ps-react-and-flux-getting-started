import React, { Component } from "react";

/* class AboutPage extends React.Component {

} */

/**
 * We need to extend a base class called React.Component from React core
 */
class AboutPage extends Component {
  /**
   * We are redefining render (overriding it) but do want to use the original behavior ?
   */
  render() {
    /* return (
      <div>
        <h2>About</h2>
      </div>
    ); */

    return (
      /*    <React.Fragment>
        <h2>About</h2>
        <p>This App uses React and ES 6 Classes to Render Components.</p>
      </React.Fragment> */

      /**
       * Remember JSX is compiled down to function calls. I can only have one top-level function
       * so I can wrap my entire JSX in a div or <> </>
       */
      <>
        <h2>About</h2>
        <p>This App uses React and ES 6 Classes to Render Components.</p>
        <a href="/home">Home Page</a>
      </>
    );
  }
}

export default AboutPage;
