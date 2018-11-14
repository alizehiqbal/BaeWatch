import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import OnboardingHelper from "./onboarding_helper";

const Auth = ({ component: Component, path, loggedIn, onboarded }) => (
  <Route
    exact
    path={path}
    render={props => {
      if (!loggedIn) {
        return <Component {...props} />;
      } else if (loggedIn && !onboarded) {
        return <Redirect to="/onboarding" />;
      } else {
        return <Redirect to="/dashboard" />;
      }
    }}
  />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  onboarded: OnboardingHelper(state.session.currentUser)
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected)
);
