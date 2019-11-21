import React, { Component } from 'react';
import { FaEllipsisH } from 'react-icons/fa';

const Popover = (props) => {
  return (
    <div className="popover-container">
      <div className="popover-title-container">
        <h4 className="popover-title">List Actions</h4>
      </div>
      <ul className="popover-actions-list">
        <li className="popover-action"><a>Add Card...</a></li>
        <li className="popover-action"><a>Copy List...</a></li>
        <li className="popover-action"><a>Move All Cards in This List...</a></li>
        <li className="popover-action"><a>Archive All Cards in This List...</a></li>
        <li className="popover-action"><a>Archive This List</a></li>
      </ul>
    </div>
  );
}

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        <FaEllipsisH 
          className="menu-icon" 
          onClick={this.props.onClick}
        />
        { this.props.isOpen && <Popover /> }
      </div>
    );
  }
};

export default Menu;
