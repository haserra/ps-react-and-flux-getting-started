import React, { useState, useEffect } from "react";
// import React, { Component } from 'react';
import { getCourses } from "../api/courseApi";

/***
 * Refactoring the CoursesPage component with Hooks
 */

function CoursesPage() {
  // set state using Hook
  // we get an object representing the state and a setter, which allows us to set state
  const [courses, setCourses] = useState([]);

  // get courses, calling the API, only when the component did mount using Hook
  useEffect(() => {
    // because of name collision we need to use underscore
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  // remove componentDidMount life cycle because it's handled by the Hook

  // also remove the render life cycle, because this is a function component, not a class component

  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
 * or I could create this component like this
 */
