import React from "react";
import PropTypes from "prop-types";

const Person = ({ id, name, age, image }) => {
  return (
    <>
      <div className="d-flex ">
        <div style={{ marginRight: "10px" }}>
          <img
            className="rounded-circle"
            src={image}
            alt={name}
            style={{ height: "70px", width: "70px" }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center">
          <span>
            <strong>{name}</strong>
          </span>
          <br />
          <span style={{ color: "#333638" }}>{age} years</span>
        </div>
      </div>
    </>
  );
};

Person.propTypes = {};

export default Person;
