import React, { Component } from 'react';
import Tag from './Tag';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="tags">
        {
          this.props.tags.map(tag => (
            <Tag text={tag} />
          ))
        }
        </div>
        <p className="card-description">{this.props.description}</p>
      </div>
    );
  }
};

export default Card;
