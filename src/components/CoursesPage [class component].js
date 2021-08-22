import React from "react";
//import React, { Component } from "react";
import { getCourses } from "../api/courseApi";

/***
 * React.Component is an abstract class
 */
class CoursesPage extends React.Component {
  //class CoursesPage extends Component {
  // overriding the abstract method render() ?
  // initialize state, which is an object with properties
  // Therefore the state of a component is an object whose properties represents
  // The right method to initialize state is within the constructor, or alternatively we can simply use a class field

  // learn more here: https://javascript.info/class-inheritance#overriding-a-method

  // we can use a class field instead of a constructor

  // learn more here: https://javascript.info/class#class-fields
  state = {
    courses: [],
  };

  // alternatively

  /* constructor(props){
    super(props);
    this.state = {
      courses: []
    };
  } */

  // alternative using a class field!

  // when this particular component loads we need to request a list of courses
  // imediately after the component is mounted

  // when this component loads we want to request a list of courses
  // lets import getCourses wich returns a Promise resolved to a response object

  // we want to set some state when the page loads
  // componentDidMount is the right life cycle method to perform API calls

  componentDidMount() {
    //
    /* getCourses().then(function(courses){
      //this.state.courses = courses; // THIS IS WRONG!! because state is immutable ?
      this.setState({
        courses: courses
      });      
    }) */

    // alternatively using concise arrow syntax
    getCourses().then((courses) => this.setState({ courses: courses }));
    this.state.courses.forEach((element) =>
      console.log(`- the course is ${element}`)
    );
  }

  renderRow(course) {
    return (
      <tr>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  }

  // we should use arrow function syntax, because arrow functions automatically inherit the enclosing scope!!
  // if I reference the this keyword.
  // learn more here: https://dev.to/wangonya/this-and-arrow-functions-a67
  // https://javascript.info/arrow-functions#arrow-functions-have-no-this

  /**
   * Always add a key to dynamic child elements !
   */

  render() {
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
            {this.state.courses.map((course) => {
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
  }

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
