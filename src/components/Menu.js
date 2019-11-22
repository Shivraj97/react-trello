import React, { Component } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import Divider from './Divider';

const Popover = ({ actions }) => {
  return (
    <div className="popover-container">
      <div className="popover-title-container">
        <h4 className="popover-title">List Actions</h4>
      </div>
      <Divider />
      {
        actions.map((list, i) => (
          <div key={i}>
            <ul className="popover-actions-list">
              {
                list.map((action, j) => (
                  <li 
                    key={j}
                    className="popover-action"
                    onClick={action.onClick}
                  >
                    <p>{action.title}</p>
                  </li>
                ))
              }
            </ul>
            <Divider />
          </div>
        ))
      }
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
        { this.props.isOpen && <Popover actions={this.props.actions} /> }
      </div>
    );
  }
};

export default Menu;
