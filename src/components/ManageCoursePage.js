import React, { useState, useEffect } from "react";
import { Prompt, Redirect } from "react-router-dom";
import CourseForm from "./CourseForm";
//import * as courseApi from "../api/courseApi"; // when using the course store we don't need to access anymore the API
import courseStore from "../stores/courseStore";
import { toast } from "react-toastify";
import * as courseActions from "../actions/courseActions";

// let's update the ManageCoursePage to use the CourseStore store

// let's write a function component using arrow syntax
// ManageCoursePage holds the state and the change handlers

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  // instead of changing this function component into a class component
  // so it could be easier to manage state, let's use Hooks.
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      //courseApi.getCourseBySlug(slug).then((_course) => {
      //  setCourse(_course);
      //});
      // instead of calling the API we now query the store
      setCourse(courseStore.getCourseBySlug(slug));

      // Problem: the ManageCoursePage needs to assure the Flux store is populated before requesting a course by slug
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);
  // debugger;

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  // since ManageCoursePage holds the state, it will declare the change handler too.
  // it will receive automatically an event passed over by the browser

  function handleChange(event) {
    //debugger;
    console.log(
      `The event target name is: ${event.target.name}. And the element that has been targeted is ${event} `
    );
    // course.title = event.target.title; // this is wrong because state is immutable. I need to use the setter instead, like this:
    // const updatedCourse = { ...course, title: event.target.value };
    // updatedCourse.title = event.target.title;
    // because we need as many change handlers as many inputs we have in the form than it's beeterr to use the computed proeprty , like this:

    // const updatedCourse = { ...course }
    // this is equivalent to:  Object.assign(updatedCourse, course)

    // normally this would be:
    // const updatedCourse = { ...course, title: event.target.value;}
    // setCourse(updatedCourse);

    // JavaScript Computed property name (ES6 syntax): Set a property on this object based on the value of this variable.
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value,
    }; // this is equivalent to :
    // Copy the course object and set the title
    setCourse(updatedCourse);
  }

  // after destructuring the event object passed in by the browser
  function handleChange2(event) {
    // debugger;
    // course.title = event.target.title; // this is wrong because state is immutable. I need to use the setter instead, like this:
    // const updatedCourse = { ...course, title: event.target.value };
    // updatedCourse.title = event.target.title;
    // because we need as many change handlers as many inputs we have in the form than it's better to use the computed property, like this:
    const { target } = event;

    const updatedCourse = {
      ...course,
      [target.name]: target.value,
    };
    setCourse(updatedCourse);
  }

  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "The Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);

    // The form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    /**
     * this will prevent the form to post back to the server,
     * because for the purpose of this exercise I want to handle save on the client side
     */

    event.preventDefault();
    // courseApi.saveCourse(course); // this way could be enough.
    // what do we want to do after save?
    // it makes sense to redirect the user to the courses page

    // insert validation here
    // debugger;
    if (!formIsValid()) {
      return;
    }

    // otherwise proceed

    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses"); // but we could use Router redirect explicitly
      // window.location.replace("/courses");
      // but afterwards, we are not notifying the user that the save was completed successfully
      // let's do that with React-toastify component (jump over to App.js)
      toast.success("Course saved successfully!");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <Prompt when={true} message="Are you sure you want to leave?" />
      {/**
      For now let's just display the course slug from the URL */}

      {props.match.params.slug}
      <h3> Displaying the query</h3>
      {props.location.query}
      <h3> Displaying the pathname</h3>
      {props.location.pathname}

      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

/**
 * Alternatively I could write is as a normal function expression
 */

function ManageCoursePage_(props) {
  //debugger;
  return (
    <React.Fragment>
      <h2>Manage Course</h2>
      {props.match.params.slug}
    </React.Fragment>
  );
}

export default ManageCoursePage;
