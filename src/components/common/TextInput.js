import React from "react";
import PropTypes from "prop-types";

function TextInput(props) {
  let wrapperClass = "form-group";
  // props.error always exist
  /*   if (props.error && props.error.length > 0) {
    wrapperClass += " has-error";
  } */

  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          onChange={props.onChange}
          name={props.name} // set name to title because that corresponds to the property title on course object
          className="form-control"
          value={props.value}
        />
      </div>
      {
        // JavaScript && operator returns the right hand expression:
        // If left hand expression can be converted to true, returns right hand expression; else, returns expr1.
      }
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

// Whenever we declare a reusable component it's especially important to declare propTypes for reusable components

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  error: "",
};

export default TextInput;
