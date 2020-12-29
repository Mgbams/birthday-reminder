import React from "react";
import Birthday from "./components";

const App = () => {
  return (
    <div className="App d-flex justify-content-center align-items-center">
      <header className="App-header mt-5 mb-5">
        <div class="card" style={{ width: "27rem", height: "97vh" }}>
          <div class="card-body">
            <Birthday />
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
