import React, { useState } from "react";
// import { DisplayBooks } from "./components/DisplayBooks";
// import { DisplayLocations } from "./components/DisplayLocations";
// import { Generator } from "./components/Generator/Generator";
// import { RegistrationFormState } from "./components/RegistrationFormState";
import { RegistrationFormRefs } from "./components/RegistrationFormRefs/RegistrationFormRefs";
import { ViewPort } from "./components/ViewPort/ViewPort";
import { Counter } from "./components/Counter";
import { Stepper } from "./components/Stepper";
import { AuthProvider } from "./components/Auth/AuthContext";
import { AuthInfo } from "./components/Auth/AuthInfo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Start app</h1>
      <AuthProvider>
        <AuthInfo />
      </AuthProvider>
      <Stepper />
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
