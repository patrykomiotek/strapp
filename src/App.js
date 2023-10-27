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
import { DataTablePage } from "./pages/DataTablePage";
import { Version } from "./components/Version";
import { Provider } from "react-redux";
import { store } from "./store";

const ROUTES = {
  ABOUT: "/about",
  CONTACT: "/contact",
  BOOKS: "/books",
  TABLE: "/table",
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Start app</h1>
        {/* <DisplayBooks /> */}
        <HashRouter basename="/">
          <ul>
            <li>
              <Link to={ROUTES.ABOUT}>About</Link>
            </li>
            <li>
              <Link to={ROUTES.CONTACT}>Contact</Link>
            </li>
            <li>
              <Link to={ROUTES.BOOKS}>Books</Link>
            </li>
            <li>
              <Link to={ROUTES.TABLE}>Data Table</Link>
            </li>
          </ul>
          <Switch>
            <Route path={ROUTES.ABOUT}>
              <AboutPage />
            </Route>
            <Route path={ROUTES.CONTACT}>
              <ContactPage />
            </Route>
            <Route path={ROUTES.BOOKS}>
              <BooksPage />
            </Route>
            <Route path={ROUTES.TABLE}>
              <DataTablePage />
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
