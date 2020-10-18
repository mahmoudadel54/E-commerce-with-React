import React, { Component } from "react";
import queryString from "query-string";

class About extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.history.push("/");
  };
  render() {
    const qs = queryString.parse(this.props.location.search);
    return (
      <React.Fragment>
        <div className="about-us-container">
          <div className="col">
            <h1 style={{ margin: "35px" }}>About</h1>
            <div style={{ textAlign: "center" }}>
              Vegefood offers online produce delivery for hundreds of different
              vegetables. We work directly with farms to bring you fresh produce
              that's unparalleled when it comes to quality, tastiness and
              variety.
            </div>
          </div>
        </div>
        <span onClick={this.handleClick} className="btn btn-secondary">
          To Home
        </span>
      </React.Fragment>
    );
  }
}

export default About;
