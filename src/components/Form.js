import React, { Component } from 'react';
import styled from 'styled-components';
import { IoIosClose as CancelIcon } from 'react-icons/io';
import Button from './Button';

const FormContainer = styled.form`
  padding: ${props => props.type === 'list' ? '10px' : '0'};
  background-color: #ebecf0;
  border-radius: 3px;
  width: ${props => props.type === 'list' ? '275px' : '250px'};
`;

const FormTextArea = styled.textarea`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  margin-bottom: 8px;
  min-height: 50px;
  max-height: 200px;
  padding: 10px;
  font-size: 14px;
  border: none;
  overflow: hidden;
  resize: none;
  width: 250px;
  outline: none;
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

const FormIcon = styled(CancelIcon)`
  font-size: 24px;
  cursor: pointer;
  color: #5e6c84;
  vertical-align: middle;
`;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = { inputText: '' };

    this.handleOnChangeText = this.handleOnChangeText.bind(this);
  }

  handleOnChangeText(e) {
    this.setState({ inputText: e.target.value });
  }

  render() {
    const options = {
      type: "text", 
      value: this.state.inputText,
      placeholder: this.props.placeholder,
      onChange: this.handleOnChangeText
    };

    return (
      <FormContainer type={this.props.type} >
        {
          this.props.type === 'list' 
          ? <FormInput {...options} /> 
          : <FormTextArea {...options} />
        } 
        <Button 
          text={this.props.buttonText}
          onClick={() => this.props.onClickSubmit(this.state.inputText)} 
        />
        <FormIcon onClick={this.props.onClickCancel} />
      </FormContainer>
    );
  }
};

export default Form;
