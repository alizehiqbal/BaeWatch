import React from "react";
import LikedPerson from "./liked_person";

class LikedUsers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.likes.length === 0) {
      return <div>Loading...</div>;
    }

    const likes = this.props.likes.map(like => {
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
