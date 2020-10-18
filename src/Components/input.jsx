//input: label , name , value , error, onfocus
//output: onChange

import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <label className="font-weight-bold" htmlFor={props.name}>{props.label}</label>
      <input
        id={props.name}
        name={props.name}
        value={props.value}
        className="form-control"
        type={props.typeInput}
        onChange={props.onChange}
      />
      {props.error && <span className="errorSpan">{props.error}</span>}
    </div>
  );
};

export default Input;
