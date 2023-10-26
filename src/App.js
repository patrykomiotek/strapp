import React from "react";
import { DisplayBooks } from "./components/DisplayBooks";
import { DisplayLocations } from "./components/DisplayLocations";

import "./App.css";
import { Generator } from "./components/Generator/Generator";
import { RegistrationFormState } from "./components/RegistrationFormState";

function App() {
  return (
    <div className="App">
      <h1>Start app</h1>
      <RegistrationFormState />
      {/* <Generator /> */}
      {/* <DisplayLocations />
      <DisplayBooks /> */}
    </div>
  );
}

export default App;
