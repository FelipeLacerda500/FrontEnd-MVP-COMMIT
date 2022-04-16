import React from "react";
import "./styles.css";
const FormField = (props) => {
  return (
    <label>
      <span>{props.label}</span>
      <input type="text" />
    </label>
  );
};

export default FormField;
