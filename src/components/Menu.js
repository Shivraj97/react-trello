import React, { Component } from 'react';
import styled from 'styled-components';
import { IoIosMore as MoreIcon } from 'react-icons/io';
import Divider from './Divider';

const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const MenuIcon = styled(MoreIcon)`
  color: #5e6c84;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
`;

const PopoverContainer = styled.div`
  position: absolute;
  padding: 15px 10px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 8px 16px -4px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
  overflow: hidden;
  width: 300px;
`;

const PopoverTitleContainer = styled.div`
  margin-bottom: 10px;
`;

const PopoverTitle = styled.h4`
  margin: 0 0 15px;
  color: #5e6c84;
  text-align: center;
`;

const PopoverActionsContainer = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PopoverAction = styled.li`
  padding: 10px;
  margin: 0 -10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(9,30,66,.04);
  }
`;

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
      <PopoverContainer ref={this.popover}>
        <PopoverTitleContainer>
          <PopoverTitle>List Actions</PopoverTitle>
        </PopoverTitleContainer>
        <Divider />
        {
          this.props.actions.map((list, i) => (
            <div key={i}>
              <PopoverActionsContainer>
                {
                  list.map((action, j) => (
                    <PopoverAction
                      key={j}
                      onClick={action.onClick}
                    >
                      <p>{action.title}</p>
                    </PopoverAction>
                  ))
                }
              </PopoverActionsContainer>
              <Divider />
            </div>
          ))
        }
      </PopoverContainer>
    );
  }
}

const Menu = ({ isOpen, actions, onClick }) => (
  <MenuContainer>
    <MenuIcon onClick={onClick} />
    { 
      isOpen && 
      <Popover 
        actions={actions} 
        onClickOutside={onClick}
      /> 
    }
  </MenuContainer>
);

export default Menu;
