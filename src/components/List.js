import React, { useState } from "react";
import Person from "./Person";
import data from "../data";

const List = () => {
  const [people, setPeople] = useState(data);
  const [isClear, setIsClear] = useState(false);

  //Clear the content in people state
  const resetStates = () => {
    setPeople([]);
    setIsClear(true);
  };

  //populate the content in people state
  const populatePeople = () => {
    setPeople(data);
    setIsClear(false);
  };

  if (!isClear) {
    return (
      <>
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          return (
            <div
              style={{ marginBottom: "30px", marginTop: "20px" }}
              key={person.id}
            >
              <Person {...person} />
            </div>
          );
        })}
        <button
          className="btn col-sm-8 btn-lg"
          style={{ backgroundColor: "#f28ab2", color: "white" }}
          type="button"
          onClick={resetStates}
        >
          Clear All
        </button>
      </>
    );
  } else if (isClear) {
    return (
      <>
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          return (
            <div
              style={{ marginBottom: "30px", marginTop: "30px" }}
              key={person.id}
            >
              <Person {...person} />
            </div>
          );
        })}
        <button
          className="btn col-sm-10 btn-lg"
          style={{ backgroundColor: "#f28ab2", color: "white", width: "200px" }}
          type="button"
          className="btn"
          onClick={populatePeople}
        >
          View All
        </button>
      </>
    );
  }
};

export default List;
