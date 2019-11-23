import React, { Component } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import Button from './Button';

const FormContainer = styled.form`
  padding: 10px;
  background-color: #ebecf0;
  border-radius: 3px;
  width: 275px;
`;

const FormInput = styled.input`
  background-color: #fff;
  border-radius: 3px;
  padding: 10px;
  font-size: 14px;
  border: none;
  box-shadow: inset 0 0 0 2px #0079bf;
  overflow: hidden;
  overflow-y: scroll;
  display: block;
  margin-bottom: 5px;
  width: 250px;
  outline: none;
`;

const CancelIcon = styled(FaTimes)`
  font-size: 24px;
  cursor: pointer;
  color: #5e6c84;
  vertical-align: middle;
`;

class Form extends Component {
  state = { inputText: '' }

  render() {
    return (
      <FormContainer>
        <FormInput 
          type="text" 
          value={this.state.inputText} 
          placeholder={this.props.inputPlaceholder}
          onChange={(e) => this.setState({ inputText: e.target.value })} 
        />
        <Button 
          text={this.props.buttonText}
          onClick={() => this.props.onClickButton(this.state.inputText)} 
        />
        <CancelIcon
          onClick={this.props.onClickCancel}
        />
      </FormContainer>
    );
  }
};

export default Form;
