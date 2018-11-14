import React from "react";
import { Link } from "react-router-dom";

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      city: this.props.city,
      description: this.props.description,
      curr_lang: this.props.curr_lang,
      seeking_lang: this.props.seeking_lang,
      img_url: this.props.img_url
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
    this.props.updateUser(user).then(() => this.props.history.push("/profile"));
  }

  render() {
    return (
      <header className="profile-container">
        <div className="profile-container-edit">
          <form onSubmit={this.handleSubmit}>
            <div className="profile">
              <div>
                <div>
                  <img className="profpicture" src={`${this.state.img_url}`} />
                </div>
                <div>
                  <span className="first_name">
                    <input
                      type="string"
                      value={this.state.first_name}
                      onChange={this.update("first_name")}
                      className="login-input"
                    />
                  </span>
                  <div>
                    <div>
                      <span className="last_name">
                        <input
                          type="text"
                          value={this.state.last_name}
                          onChange={this.update("last_name")}
                          className="login-input"
                        />
                      </span>

                      <span className="city">
                        <select
                          value={this.state.city}
                          onChange={this.update("city")}
                          className="login-input"
                        >
                          <option value="Bay Area">Bay Area</option>
                          <option value="LA">LA</option>
                          <option value="NY">NY</option>
                          <option value="London">London</option>
                        </select>
                      </span>
                      <span className="drama-dot">.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h2 className="questions">Bio</h2>
                  <p className="answers">
                    <textarea
                      value={this.state.description}
                      rows="10"
                      cols="50"
                      onChange={this.update("description")}
                      className="login-input"
                    />
                  </p>
                </div>

                <div className="lang">
                  <p>
                    <span>Current Language</span>
                    <input
                      type="string"
                      value={this.state.curr_lang}
                      onChange={this.update("curr_lang")}
                      className="login-input"
                    />
                  </p>

                  <div className="lang">
                    <p>
                      <span>Seeking Language</span>
                      <input
                        type="string"
                        value={this.state.seeking_lang}
                        onChange={this.update("seeking_lang")}
                        className="login-input"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="profile-nav-buttons-container">
                <input
                  type="submit"
                  value="Update"
                  className="submit-prof-updates"
                />
              </div>
            </div>
          </form>
        </div>
      </header>
    );
  }
}

export default ProfileEdit;
