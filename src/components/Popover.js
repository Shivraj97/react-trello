import React from 'react';
import styled from 'styled-components';
import { useClickOutsideEffect } from '../hooks';
import Divider from './Divider';

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

const Popover = ({ title = "Title", children = null, onClickOutside = () => null}) => {
  const popover = React.createRef();

  useClickOutsideEffect(popover, onClickOutside);

  return (
    <PopoverContainer ref={popover}>
      <PopoverTitleContainer>
        <PopoverTitle>{title}</PopoverTitle>
      </PopoverTitleContainer>
      <Divider />
      { children }
    </PopoverContainer>
  );
};

export default Popover;
