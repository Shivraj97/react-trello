import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  background-color: #5aac44;
  border: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  margin-right: 5px;
  border-radius: 3px;
  font-weight: 600;
  padding: 0px 15px;
  text-align: center;
  width: fit-content;
  outline: none;
  line-height: 35px;
  vertical-align: middle;

  &:hover {
    background-color: #61bd4f;
  }
`;

const Button = ({ text, onClick }) => (
  <ButtonContainer onClick={onClick}>
    {text}
  </ButtonContainer>
);

export default Button;
