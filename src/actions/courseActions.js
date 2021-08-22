import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

/**
 *
 * Task: What Actions can we enumerate in the App?
 *
 * 1. Save a Course
 * 2.
 * 3.
 *
 */

// This entire function is the action creator
// The Object we pass to the dispatch method,is called the action
export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    // at this point the course has been saved. So we can put Flux to use and
    // dispatch an Action.
    // --> An Action is an Object with an Action Type property.

    // so what this does is...
    // Hey dispatcher, go tell all the stores that a course was just created (use this payload, the object)
    dispatcher.dispatch({
      //actionType: "CREATE_COURSE", // it's recommended to create a constants file
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then((courses) => {
    dispatcher.dispatch({
      // actionType: "LOAD_COURSES", // it's recommended to create a constants file
      actionType: actionTypes.LOAD_COURSES,
      courses: courses,
      // next we're ready tp update the courseStore, to handle this action type
    });
  });
}

export function deleteCourse(id) {
  return courseApi.deleteCourse(id).then(() => {
    dispatcher.dispatch({
      //actionType: "LOAD_COURSES", // it's recommended to create a constants file
      actionType: actionTypes.DELETE_COURSE,
      id: id,
      // next we're ready tp update the courseStore, to handle this action type
    });
  });
}
