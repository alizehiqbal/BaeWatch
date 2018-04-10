import React from "react";
import { Route, Link, HashRouter, Redirect, Switch } from "react-router-dom";
import SignupFormContainer from "./splash/signup_form_container";
import LoginFormContainer from "./splash/login_form_container";
import UserIndexContainer from "./users/user_index_container";
import NavBarContainer from "./navbar/navbar_container";
import DashboardNavBarContainer from "./navbar/dashboard_nav_container";
import Splash from "./splash/splash";
import { AuthRoute, ProtectedRoute } from "../util/route_util.js";

const App = () => (
  <div className="app-container">
    <header>
      <h1>Bae Watch</h1>
      <AuthRoute path="/" component={NavBarContainer} />
      <ProtectedRoute path="/" component={DashboardNavBarContainer} />
    </header>

    <main>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/dashboard" component={UserIndexContainer} />
      <AuthRoute exact path="/" component={Splash} />
    </main>

    <footer>Made by Alizeh.</footer>
  </div>
);

export default App;
