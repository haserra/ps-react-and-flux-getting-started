import React, { useState, useEffect } from "react";
// import React, { Component } from 'react';

import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

/***
 * Refactoring the CoursesPage component with Hooks
 */
function CoursesPage() {
  // set state using Hook
  // we get an object representing the state and a setter , which allows us to set state
  const [courses, setCourses] = useState([]);

  // get courses, calling the API, only when the component did mount using Hook
  // instead of using componentDidMount Lifecycle Method let's use useEffect Hook
  useEffect(() => {
    // because of name collision we need to use underscore
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  // NEVER forget to declare the dependency array of the useEffect hook - the dependency array is where we tell
  // useEffect when it should re-run

  // remove componentDidMount life cycle because it's handled by the Hook

  // also remove the render life cycle, because this is a function component , not a class component

  // this way we are separating our logic from our markup

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      {
        // REMEMBER: props looks a lot like HTML attributes, but they're used to pass down values to child components and they're called props
      }

      <CourseList myCourses={courses} myHeader="test header" />
    </>
  );

  /* render() {
  return (
    <>
      <h2>Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {this.state.courses.map(this.renderRow)}
        </tbody>
      </table>
    </>
  );

}; */
}

export default CoursesPage;

/**
 * or I could create this componnet like this
 */
