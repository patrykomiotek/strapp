import React from "react";
import { DisplayBooks } from "./components/DisplayBooks";
import { DisplayLocations } from "./components/DisplayLocations";

import "./App.css";
import { Generator } from "./components/Generator/Generator";
import { RegistrationFormState } from "./components/RegistrationFormState";
import { RegistrationFormRefs } from "./components/RegistrationFormRefs/RegistrationFormRefs";
import { ViewPort } from "./components/ViewPort/ViewPort";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>Start app</h1>
      <Counter />
      <ViewPort />
      <RegistrationFormRefs />
      {/* <RegistrationFormState /> */}
      {/* <Generator /> */}
      {/* <DisplayLocations />
      <DisplayBooks /> */}
    </div>
  );
}

export default App;
