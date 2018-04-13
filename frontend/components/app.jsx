import React from "react";
import { Route, Link, HashRouter, Redirect, Switch } from "react-router-dom";
import SignupFormContainer from "./splash/signup_form_container";
import LoginFormContainer from "./splash/login_form_container";
import UserIndexContainer from "./users/user_index_container";
import NavBarContainer from "./navbar/navbar_container";
import DashboardNavBarContainer from "./navbar/dashboard_nav_container";
import Splash from "./splash/splash";
import { AuthRoute, ProtectedRoute } from "../util/route_util.js";
import LikedUsersContainer from "./users/liked_users_container";

const App = () => (
  <div className="app-container">
    <header>
      <nav className="toppy-top">
        <h1 className="bae-watch">Bae Watch</h1>
        <AuthRoute path="/" component={NavBarContainer} />
        <ProtectedRoute path="/" component={DashboardNavBarContainer} />
      </nav>
    </header>

    <main>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/dashboard" component={UserIndexContainer} />
      <ProtectedRoute path="/crushes" component={LikedUsersContainer} />
      <AuthRoute exact path="/" component={Splash} />
    </main>

    <footer className="footer">
      Made by Alizeh. Bob Ross quote of the day: "A tree cannot be straight if
      it has a crooked trunk. It's life. It's interesting. It's fun. We're not
      trying to teach you a thing to copy. We're just here to teach you a
      technique, then let you loose into the world. You don't have to be crazy
      to do this but it does help."
    </footer>
  </div>
);

export default App;
