import React from "react";
import { NavLink } from "react-router-dom";
//import "../../styles/header.css";

function Header() {
  // In React we can optionaly declare styles using objects
  // css styles are camel cased instead of being separated by dashes

  const active = {
    color: "orange",
  };

  return (
    <nav>
      {/**
        Instead of using anchors or the Link component, lets use NavLink, down below
        <a href="/">Home</a> | <a href="/courses">Courses</a> |{" "}
        <a href="/about">About</a>
       */}
      <NavLink activeStyle={active} className="" to="/" exact>
        {" "}
        {/** we need to include exact, otherwise this route always match */}
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={active} className="" to="/courses">
        Courses
      </NavLink>
      {" | "}
      <NavLink activeStyle={active} className="" to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Header;
