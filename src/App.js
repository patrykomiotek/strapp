import React, { useState } from "react";
// import { DisplayBooks } from "./components/DisplayBooks";
// import { DisplayLocations } from "./components/DisplayLocations";
// import { Generator } from "./components/Generator/Generator";
// import { RegistrationFormState } from "./components/RegistrationFormState";
import { RegistrationFormRefs } from "./components/RegistrationFormRefs/RegistrationFormRefs";
import { ViewPort } from "./components/ViewPort/ViewPort";
import { Counter } from "./components/Counter";
import { Stepper } from "./components/Stepper";
import { AuthContext } from "./components/Auth/AuthContext";
import { AuthInfo } from "./components/Auth/AuthInfo";

import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <h1>Start app</h1>
      <AuthContext.Provider value={{ isLogged, setIsLogged }}>
        <AuthInfo />
      </AuthContext.Provider>
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
