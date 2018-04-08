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
    return (
      <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
      <p>{this.props.user.description}</p>
      <button onClick={() => modalHandler()}>Cool, moving along!</button>
    )
  }

  render() {
    <li className="article-index-item">
      <img src={imgUrl} />

      <div className="article-index-item-info">{username}</div>
      <button onClick={() => this.renderModal()}>Learn More!</button>
    </li>;
  }
}

export default UserIndexItem;
