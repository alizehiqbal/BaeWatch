import React from "react";

import Dropdown, {
  DropdownTrigger,
  DropdownContent
} from "react-simple-dropdown";

class SearchingFor extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.refs.dropdown.hide();
  }

  render() {
    return (
      <Dropdown className="dropdown-container" ref="dropdown">
        <DropdownTrigger>Rubyist</DropdownTrigger>
        <DropdownContent>
          <ul>
            <li>Javascriptor</li>
            <li>C+(plus some!)</li>
            <li>Haskallawag</li>
            <li>Pythonista</li>
            <li>Other</li>
          </ul>
        </DropdownContent>
      </Dropdown>
    );
  }
}

export default SearchingFor;
