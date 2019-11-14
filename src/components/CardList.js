import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="cardlist">
        <h3 
          className="cardlist-title"
          onClick={() => this.props.onRemoveList(data.id)}
        >
          {data.title}
        </h3>
        <p className="cardlist-subtitle">
          {data.cards.length} cards
        </p>
        <ol className="cardlist-cards">
          {
            data.cards.map(card => (
              <li 
                key={card.id}
                onClick={() => this.props.onRemoveCard(data.id, card.id)}
              >
                <Card description={card.description} />
              </li>
            ))
          }
        </ol>
        <button 
          className="cardlist-button"
          onClick={() => this.props.onAddCard(data.id)}
        >
          + Add a card
        </button>
      </div>
    );
  }
};

export default CardList;
