import React from "react";
import { Route, Link, HashRouter, Redirect, Switch } from "react-router-dom";
import SignupFormContainer from "./signup_form_container";
import LoginFormContainer from "./login_form_container";

const App = () => (
  <div>
    <header>
      <h1>Bae Watch</h1>
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
