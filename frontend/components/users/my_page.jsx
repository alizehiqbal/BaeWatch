import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  render() {
    // if !(this.props.currentUser) {
    //   return (
    //     <div>
    //       Loading...
    //     </div>
    //   )
    // }

    return (
      <header className="profile-container">
        <div className="profile">
          <div>
            <span className="name">
              {this.props.currentUser.first_name}{" "}
              {this.props.currentUser.last_name}
            </span>
            <div className="top-sub-container">
              <div className="top-sub-info">
                <span className="age">{this.props.currentUser.age}</span>

                <span className="city">{this.props.currentUser.city}</span>
              </div>
              <div className="profile-nav-buttons-container">
                <Link to="/profile/edit" className="profile-nav-buttons">
                  <span>Edit</span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            {this.props.currentUser.description || "-"}

            <div className="bottom-right">
              <div className="looking-for">
                <span>Current Language</span>
                {this.props.currentUser.current_lang || "-"}
              </div>
              <div className="looking-for">
                <span>Looking For </span>
                {this.props.currentUser.seeking_lang || "-"}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Profile;
