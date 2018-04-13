import React from "react";
import LikedPerson from "./liked_person";

class LikedUsers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.user);
    if (this.props.user.liked_users.length === 0) {
      return <div>Loading...</div>;
    }

    const likes = this.props.user.liked_users.map(like => {
      return (
        <LikedPerson
          key={like.id}
          like={like}
          deleteLike={this.props.deleteLike}
        />
      );
    });

    return (
      <div className="userindexhomepage">
        <ul>{likes}</ul>
      </div>
    );
  }
}

export default LikedUsers;
