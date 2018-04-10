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
    this.demoState = { username: "username", password: "password" };
  }

  demoLogin() {
    this.setState(this.demoState);
    this.props.processForm(this.state).then(() => this.props.history.push("/"));
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
        <button className="demo-button" onClick={this.demoLogin} type="submit">
          Demo Login
        </button>
      );
    }
    return (
      <body>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            Hey, you. Yeah, you. Ready to debug love?
            <br />
            Please {this.props.formType}
            {this.renderErrors()}
            <div className="login-form">
              <br />
              <label>
                Username:
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="login-input"
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="login-input"
                />
              </label>
              <br />
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
