import React from "react";
import UserIndexItem from "./user_index_item";

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const users = this.props.users.map(user => {
      return <UserIndexItem key={user.id} user={user} imgUrl={user.imgUrl} />;
    });

    return (
      <div className="userindexhomepage">
        <ul>{users}</ul>
      </div>
    );
  }
}

export default UserIndex;
