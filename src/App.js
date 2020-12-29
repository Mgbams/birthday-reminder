import React from "react";
import Birthday from "./components";

const App = () => {
  return (
    <div
      className="App"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <header className="App-header mt-5 mb-5">
        <div className="card" style={{ width: "27rem" }}>
          <div className="card-body">
            <Birthday />
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
