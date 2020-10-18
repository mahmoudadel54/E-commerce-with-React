import React from "react";
import Joi from "joi-browser";
import { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: {},
  };
  //--------------------Validate using Joi -------------------------//
  schema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().min(8).required(),
  });
  ////using Joi validate function
  validate = () => {
    const data = { ...this.state };
    delete data.error;
    const res = Joi.validate(data, this.schema, { abortEarly: false });
    if (res.error) {
      const error = {};
      for (const detail of res.error.details) {
        error[detail.path[0]] = detail.message;
        this.setState({ error });
      }
      return false;
    }
    return true;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      console.log("Submit");
    } else {
      console.log("Not Submit");
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className=" registerForm logIn">
          <div className="col-3 ml-4 formFormat">
            <h1 className="mb-3 headerForm">Login Form</h1>
            <br />
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="font-weight-bold" htmlFor="email">
                  User Name or E-mail Address
                </label>
                <input
                  id="email"
                  name="email"
                  value={this.state.name}
                  className="form-control"
                  onChange={this.handleChange}
                  type="text"
                  autoFocus
                ></input>
                {this.state.error.email && (
                  <span className="errorSpan">
                    {"*" + this.state.error.email}
                  </span>
                )}
                <br />

                <label className="font-weight-bold" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  value={this.state.password}
                  className="form-control"
                  onChange={this.handleChange}
                  type="password"
                ></input>
                {this.state.error.password && (
                  <div>
                    <span className="errorSpan">
                      {"*" + this.state.error.password}
                    </span>
                    <br />
                  </div>
                )}
                <br />
                <div className="signUp">
                  <button type="submit" className="btn btn-primary ">
                    Login
                  </button>
                </div>
                <br />
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Login;
