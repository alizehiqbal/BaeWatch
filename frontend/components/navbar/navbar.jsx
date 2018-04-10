import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-container">
        <nav className="login-signup">
          <Link to="/login">Login or </Link>
          <Link to="/signup">Sign up!</Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;
