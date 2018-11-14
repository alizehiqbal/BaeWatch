import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props
      .updateUser(user)
      .then(() => this.props.history.push("/onboarding2"));
  }
  render() {
    return (
      <div className="onboarding-container">
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>Great, let's get started. What's your name?</p>
          <br />
          <br />
          <div className="onboard-form">
            <span className="inputty">First Name</span>
            <label>
              <input
                type="text"
                placeholder="First Name"
                value={this.state.first_name}
                onChange={this.update("first_name")}
                className="login-input"
              />
            </label>
            <br />

            <br />
            <span className="inputty">Last Name</span>
            <label>
              <input
                type="text"
                placeholder="Last Name"
                value={this.state.last_name}
                onChange={this.update("last_name")}
                className="login-input"
              />
            </label>
            <br />
            <div className="login-form-buttonies">
              <input className="session-submit" type="submit" value="Next" />
            </div>
          </div>
          <br />
        </form>
      </div>
    );
  }
}

export default withRouter(Onboarding);
