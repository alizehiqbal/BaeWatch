import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curr_lang: this.props.user.curr_lang,
      seeking_lang: this.props.user.seeking_lang
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
      .then(() => this.props.history.push("/dashboard"));
  }
  render() {
    return (
      <div className="onboarding-container">
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>Let's talk about language, shall we?</p>
          <br />
          <br />
          <div className="onboard-form">
            <span className="inputty">Your fave programming language</span>
            <label>
              <input
                type="text"
                placeholder="JavaScript"
                value={this.state.curr_lang}
                onChange={this.update("curr_lang")}
                className="login-input"
              />
            </label>
            <br />

            <br />
            <span className="inputty">
              Tryna connect with someone who codes...
            </span>
            <label>
              <input
                type="text"
                placeholder="PHP"
                value={this.state.seeking_lang}
                onChange={this.update("seeking_lang")}
                className="login-input"
              />
            </label>
            <br />
            <div className="login-form-buttonies">
              <input className="session-submit" type="submit" value="Let' Go" />
            </div>
          </div>
          <br />
        </form>
      </div>
    );
  }
}

export default withRouter(Onboarding2);
