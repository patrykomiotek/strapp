import React from "react";
import { DisplayBooks } from "./components/DisplayBooks";
import { DisplayLocations } from "./components/DisplayLocations";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Start app</h1>
      <DisplayLocations />
      <DisplayBooks />
    </div>
  );
}

export default App;
