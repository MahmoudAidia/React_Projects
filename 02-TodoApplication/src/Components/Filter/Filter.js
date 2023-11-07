import React, { useState } from "react";
import "./Filter.css";
const Filter = (props) => {
  const ascending = 1;
  const descending = 2;
  const inProgress = 3;
  const done = 4;
  const dropDownChangeHandler = (event) => {
    props.getDropDownValue(event.target.value);
  };

  return (
    <div className="filter-container">
      <label className="select-label">Sort Tasks by</label>
      <select className="filter-select" onChange={dropDownChangeHandler}>
        <option value={ascending} className="filter-option">
          Shorter
        </option>
        <option value={descending} className="filter-option">
          Longer
        </option>
      </select>
    </div>
  );
};
export default Filter;
