import React, { useState } from "react";
import Person from "./Person";
import data from "../data";

const List = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <h3>{people.length} birthdays today</h3>
      {people.map((person) => {
        return (
          <div style={{ marginBottom: "30px", marginTop: "20px" }}>
            <Person key={person.id} {...person} />
          </div>
        );
      })}
      <button
        className="btn col-sm-8"
        style={{ backgroundColor: "#f28ab2", color: "white" }}
      >
        View all
      </button>
    </>
  );
};

export default List;
