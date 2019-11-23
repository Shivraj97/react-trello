import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  background-color: #5aac44;
  border: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: 3px;
  font-weight: 600;
  padding: 8px 16px;
  text-align: center;
  width: fit-content;
  outline: none;

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
