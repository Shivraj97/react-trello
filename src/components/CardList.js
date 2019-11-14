import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    return (
    <div className="cardlist">
      <h3 className="cardlist-title">
        {this.props.title}
      </h3>
      <p className="cardlist-subtitle">
        {this.props.cards.length} cards
      </p>
      <ol className="cardlist-cards">
        {
          this.props.cards.map(card => (
            <li key={card.id}>
              <Card description={card.description} />
            </li>
          ))
        }
      </ol>
      <button className="cardlist-button">
        + Add a card
      </button>
    </div>
    );
  }
};

export default CardList;
