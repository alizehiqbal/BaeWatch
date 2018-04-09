import React from "react";
import { Link } from "react-router-dom";

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login or </Link>
    <Link to="/signup">Sign up!</Link>
  </nav>
);

const howdie = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hey, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>
      Log Out
    </button>
  </hgroup>
);

const sayHowdie = ({ currentUser, logout }) =>
  currentUser ? howdie(currentUser, logout) : sessionLinks();

export default sayHowdie;
