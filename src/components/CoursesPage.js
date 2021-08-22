import React, { useState, useEffect } from "react";
// import React, { Component } from 'react';
// import { getCourses } from "../api/courseApi";
import courseStore from "../stores/courseStore"; // this is a namespace (?)
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";

/***
 * Refactoring the CoursesPage component with Hooks
 */

function CoursesPage() {
  // set state using Hook
  // we get an object representing the state and a setter , which allows us to set state
  // const [courses, setCourses] = useState([]);
  const [courses, setCourses] = useState(courseStore.getCourses()); // using state from the flux store, not local state. Be thou careful

  // get courses, calling the API, only when the component did mount using Hook
  // instead of using componentDidMount Lifecycle Method let's use useEffect Hook

  // let's update the CoursePage component to utilize our course Store

  useEffect(() => {
    // on page load
    // because of name collision we need to use underscore
    // getCourses().then((_courses) => setCourses(_courses));
    // instead of calling the API let's refactor it so we can call the courseStore function getCourses, inside the setCourses method
    // however, note that initially the _courses aray is empty!
    // so we need Flux actions to initialize the App

    // Goal:
    // 1. Subscribe to Flux store
    // 2. If courses haven't been loaded, call loadCourses action

    courseStore.addChangeListener(onChange); // addChangeListener accepts a function that we will call when the store changes
    //setCourses(courseStore.getCourses()); // previously was here
    // on load we need to verify if the course Store has courses or not.
    if (courseStore.getCourses().length === 0) {
      loadCourses();
    }
    // important to remember that when a component unmounts we need to clean it up (sort of unsubscribe?)
    // with useEffect, we declare the code to run on unmount by returning a function
    // so let's return a function that calls removeChangeListener with its callback - the onChange function
    return () => courseStore.removeChangeListener(onChange); // this will cleanup on unmount
  }, []);

  // NEVER forget to declare the dependency array of the useEffect hook - the dependency array is where we tell
  // useEffect when it should re-run

  // remove componentDidMount life cycle because it's handled by the Hook

  // also remove the render life cycle, because this is a function component , not a class component

  // this way we are separating our logic from our markup

  function onChange() {
    // when the courseStore changes, we want to get the list of courses and update state.
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      {
        // REMEMBER: props looks a lot like HTML attributes, but they're used to pass down values to child components and they're called props
      }

      <CourseList
        myCourses={courses}
        deleteCourse={deleteCourse}
        myHeader="test header"
      />
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
