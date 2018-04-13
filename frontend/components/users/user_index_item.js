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
        <div className="hellyeahmodalrapper">
          <div className="hellyeahmodal">
            <p>{this.props.user.description}</p>
            <div className="butt-container">
              <button
                className="bubble-button"
                onClick={() => this.modalHandler()}
              >
                Cool, moving along!
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return;
    }
  }

  render() {
    console.log(this.props.user);
    const user = this.props.user;
    return (
      <li className="article-index-item">
        <img src={user.imgUrl} />

        <div className="article-index-item-info">{user.first_name}</div>
        <button className="nother-button" onClick={() => this.renderModal()}>
          Learn More!
        </button>
        {this.modal()}
      </li>
    );
  }
}

export default UserIndexItem;
