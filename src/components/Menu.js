import React, { Component } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import Divider from './Divider';

class Popover extends Component {
  constructor(props) {
    super(props);

    // create a ref to store the Popover/div DOM element
    this.popover = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e) {
    if (this.popover.current.contains(e.target)) {
      return;
    }
    this.props.onClickOutside();
  }

  render() {
    return (
      <div 
        ref={this.popover}
        className="popover-container"
      >
        <div className="popover-title-container">
          <h4 className="popover-title">List Actions</h4>
        </div>
        <Divider />
        {
          this.props.actions.map((list, i) => (
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
}

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        <FaEllipsisH 
          className="menu-icon" 
          onClick={this.props.onClick}
        />
        { 
          this.props.isOpen && 
          <Popover 
            actions={this.props.actions} 
            onClickOutside={this.props.onClick}
          /> 
        }
      </div>
    );
  }
};

export default Menu;
