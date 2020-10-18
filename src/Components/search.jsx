//onChange for search

import React from "react";

const Search = (props) => {
  const { onChange } = props;
  return (
    <React.Fragment>
      <div className="row" style={{ width: "450px", margin: "auto" }}>
        <input
          className="form-control"
          placeholder="Search..."
          onChange={onChange}
        />
      </div>
      <div className="col-3"></div>
    </React.Fragment>
  );
};

export default Search;
