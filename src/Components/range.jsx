import React from "react";

const Range = (props) => {
  const { maxPrice, rangeHandler } = props;
  return (
    <div id="range" className="col">
      <label
        htmlFor="Price"
        style={{
          backgroundColor: "grey",
          color: "white",
          display: "inline-block",
          border: "solid",
          borderRadius: "0.5rem",
        }}
      >
        {" "}
        Price Range
      </label>
      <input
        type="range"
        value={maxPrice}
        min="0"
        max="100"
        step="2"
        onChange={(e) => rangeHandler(e)}
      />
      <div className="rangeLabel row" style={{ fontWeight: "bold" }}>
        Max Price:{maxPrice}{" "}
      </div>
    </div>
  );
};

export default Range;
