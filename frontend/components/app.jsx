import React from "react";
import { Route, Link, HashRouter, Redirect, Switch } from "react-router-dom";
import SignupFormContainer from "./splash/signup_form_container";
import LoginFormContainer from "./splash/login_form_container";
import UserIndexContainer from "./users/user_index_container";
import Splash from "./splash/splash";

const App = () => (
  <div>
    <header>
      <h1>Bae Watch</h1>
    </header>
    <Switch>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/dashboard" component={UserIndexContainer} />
      <Route path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;
