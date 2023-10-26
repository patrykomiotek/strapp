import React from "react";
import { DisplayBooks } from "./components/DisplayBooks";
import { DisplayLocations } from "./components/DisplayLocations";

import "./App.css";
import { Generator } from "./components/Generator/Generator";
import { RegistrationFormState } from "./components/RegistrationFormState";
import { RegistrationFormRefs } from "./components/RegistrationFormRefs/RegistrationFormRefs";
import { ViewPort } from "./components/ViewPort/ViewPort";

function App() {
  return (
    <div className="App">
      <h1>Start app</h1>
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
