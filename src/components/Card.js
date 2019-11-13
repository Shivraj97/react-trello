import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <p className="card-description">{this.props.description}</p>
      </div>
    );
  }
};

export default Card;
