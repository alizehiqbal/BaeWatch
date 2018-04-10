import React from "react";
import { Link } from "react-router-dom";

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.modalHandler = this.modalHandler.bind(this);
  }

  modalHandler(e) {
    this.setState({ modalOpen: false });
  }

  renderModal(props) {
    this.setState({ modalOpen: true });
  }

  modal() {
    if (this.state.modalOpen) {
      return (
        <div>
          <h3>
            {this.props.user.first_name} {this.props.user.last_name}
          </h3>
          <p>{this.props.user.description}</p>
          <button onClick={() => this.modalHandler()}>
            Cool, moving along!
          </button>
        </div>
      );
    } else {
      return;
    }
  }

  render() {
    const user = this.props.user;
    return (
      <li className="article-index-item">
        <img src={user.imgUrl} />

        <div className="article-index-item-info">{user.username}</div>
        <button onClick={() => this.renderModal()}>Learn More!</button>
        {this.modal()}
      </li>
    );
  }
}

export default UserIndexItem;
