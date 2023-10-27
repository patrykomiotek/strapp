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
import { HashRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import { DisplayBooks } from "./components/DisplayBooks";
import { AboutPage } from "./pages/About";
import { BooksPage } from "./pages/BooksList";
import { ContactPage } from "./pages/Contact";
import { Version } from "./components/Version";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Start app</h1>
        {/* <DisplayBooks /> */}
        <HashRouter basename="/">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/books">
              <BooksPage />
            </Route>
          </Switch>
          <Version />
          {/* <AuthProvider>
          <AuthInfo />
        </AuthProvider>
        <Stepper />
        <Counter />
        <ViewPort />
        <RegistrationFormRefs /> */}
          {/* <RegistrationFormState /> */}
          {/* <Generator /> */}
          {/* <DisplayLocations />
      <DisplayBooks /> */}
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
