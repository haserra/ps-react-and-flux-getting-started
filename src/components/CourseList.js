import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/***
 * Function components receive props as an argument, automatically
 * even if I don't pass it explicitly
 */
function CourseList(props) {
  return (
    <>
      <h1>{props.myHeader}</h1>
      <table className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.myCourses.map((course) => {
            return (
              <tr key={course.id}>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => props.deleteCourse(course.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  {" "}
                  <Link to={"course/" + course.slug}>{course.title}</Link>
                </td>
                <td>
                  {" "}
                  <Link to={"course/" + course.slug}>
                    {course.authorId}
                  </Link>{" "}
                  {/** / exercise: instead of showing authorId , show author's name */}
                </td>
                <td>
                  {" "}
                  <Link to={"course/" + course.slug}>{course.category}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

// PropTypes allow us to specify the data that a component accepts on props object

// because a function is also an object we are allowed to do this:
CourseList.propTypes = {
  myCourses: PropTypes.array.isRequired,
};

CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  myCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// if the component doesn't receive a course list prop, then a default empty array will be
CourseList.defaultProps = {
  myCourses: [],
};

export default CourseList;
