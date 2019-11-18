import React, { Component } from 'react';
import Tag from './Tag';

class Card extends Component {
  render() {
    let tags = null;
    if (this.props.tags) {
      tags = (
        <div className="tags">
        {
          this.props.tags.map(tag => (
            <Tag text={tag} />
          ))
        }
        </div>
      );
    }
    
    return (
      <div className="card">
        { tags }
        <p className="card-description">{'#' + this.props.id + ' ' + this.props.description}</p>
      </div>
    );
  }
};

export default Card;
