import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";

function App() {
  return (
    <div className="App">
      <Clock label="24 Hours Live Custom Component Clock" />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <List1 label="List 1" initalValues={[1, 2, 3]} />
        <List2 label="List 2" initalValues={[4, 5]} />
      </div>
    </div>
  );
}

export default App;
