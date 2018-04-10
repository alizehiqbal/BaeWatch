import React from "react";

class DashboardNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-container">
        <hgroup className="header-group">
          <h2 className="header-name">
            Hey, {this.props.currentUser.username}!
          </h2>
          <button className="header-button" onClick={this.props.logout}>
            Log Out
          </button>
        </hgroup>
      </div>
    );
  }
}

export default DashboardNavBar;
