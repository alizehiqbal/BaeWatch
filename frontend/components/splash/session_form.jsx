import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.demoState = { username: "durian_lover666", password: "AppAcademy1" };
  }

  demoLogin(e) {
    // this.setState(this.demoState);
    e.preventDefault();
    this.props.processForm(this.demoState);
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
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    let demoButton = undefined;
    if (this.props.formType === "Login") {
      demoButton = (
        <button
          className="session-submit"
          onClick={e => this.demoLogin(e)}
          type="submit"
        >
          Demo Login
        </button>
      );
    }
    return (
      <body>
        <div className="login-form-container">
          <form onSubmit={e => this.handleSubmit(e)} className="login-form-box">
            <p>Hey, you. Yeah, you. Ready to debug love?</p>
            <p>Please {this.props.formType}</p>
            <ul>{this.renderErrors()}</ul>
            <div className="login-form">
              <label>
                Username:
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="login-input"
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="login-input"
                />
              </label>
              <div className="login-form-buttonies">
                <input
                  className="session-submit"
                  type="submit"
                  value={this.props.formType}
                />
                <button className="fb" />
                {demoButton}
              </div>
            </div>
          </form>
        </div>
      </body>
    );
  }
}

export default withRouter(SessionForm);
