import React from "react";
import { Route, Link, HashRouter, Redirect, Switch } from "react-router-dom";
import SignupFormContainer from "./signup_form_container";
import LoginFormContainer from "./login_form_container";
import UserIndex from "./users/user_index";
const App = () => (
  <div>
    <header>
      <h1>Bae Watch</h1>
    </header>
    <Switch>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/" component={Splash} />
      <Route path="/dashboard" component={UserIndex} />
    </Switch>
  </div>
);

export default App;
