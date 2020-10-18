import React, { Component } from "react";
import Joi from "joi-browser";

import Input from "./input";

class Register extends Component {
  state = {
    name: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: {},
  };

  schema = {
    name: Joi.string().required().label("Name").alphanum().min(3).max(30),
    address: Joi.string().required().label("Address"),
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
    confirmPassword: Joi.string().required().label("Confirm Password"),
  };


  validate = () => {
    const error = {};

    //USING JOI
    const data = { ...this.state };
    delete data.error;
    const res = Joi.validate(data, this.schema, { abortEarly: false });

    if (res.error) {
      //Set State
      for (const detail of res.error.details) {
        error[detail.path[0]] = detail.message;
      }
      this.setState({ error });
      return false;
    }

    this.setState({ error });
    return true;
  };

  validateProperty = (property, propertyName) => {
    //Data
    const data = property;
    //Schema
    const schema = { [propertyName]: this.schema[propertyName] };

    const res = Joi.validate(data, schema);

    if (res.error === null) {
      delete this.state.error[propertyName];
    } else {
      //Clone
      const newError = { ...this.state.error };
      //Edit
      newError[propertyName] = res.error.details[0].message;
      //Set State
      this.setState({ error: newError });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      //===> Backend
      console.log("submited!!");
    } else {
      //Errors
      console.log("Not submited!!");
      return;
    }
  };

  hadleChange = (e) => {
    //Validate
    this.validateProperty({ [e.target.name]: e.target.value }, e.target.name);

    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className=" registerForm">
        <div className="col-4 ml-4 formFormat">
          <h1 className="mb-3 headerForm">Register Form</h1>
          <br />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <Input
                label="Your Name"
                name="name"
                value={this.state.name}
                error={this.state.error.name}
                typeInput="text"
                onChange={this.hadleChange}
                className="col-3"
              />
              <Input
                label="Your Address"
                name="address"
                value={this.state.address}
                error={this.state.error.address}
                typeInput="text"
                onChange={this.hadleChange}
              />
              <Input
                label="Email Address"
                name="email"
                value={this.state.email}
                error={this.state.error.email}
                typeInput="text"
                onChange={this.hadleChange}
              />
              <Input
                label="Password"
                name="password"
                value={this.state.password}
                error={this.state.error.password}
                onChange={this.hadleChange}
                typeInput="password"
              />
              <Input
                label="Confirm Password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                error={this.state.error.confirmPassword}
                onChange={this.hadleChange}
                typeInput="password"
              />
              <div className="signUp">
                <button type="submit" className="btn btn-primary ">
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
