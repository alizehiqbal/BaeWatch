import React from "react";

class LikedPerson extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.like.first_name}
        {this.props.like.img_url}
      </div>
    );
  }
}

export default LikedPerson;
